import crypto from 'node:crypto';

const sessionCookieName = 'saleg_admin_session';
const sessionDurationMs = 1000 * 60 * 60 * 12;

function timingSafeEqualString(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || 'saleg-local-admin-secret';
}

function sign(payload) {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
}

function parseCookies(cookieHeader = '') {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((cookie) => cookie.trim().split('='))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)]),
  );
}

export function validateAdminCredentials(username, password) {
  const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
  const expectedPassword = process.env.ADMIN_PASSWORD || 'younes';

  return (
    timingSafeEqualString(String(username || ''), expectedUsername) &&
    timingSafeEqualString(String(password || ''), expectedPassword)
  );
}

export function createSessionCookie() {
  const expiresAt = Date.now() + sessionDurationMs;
  const payload = Buffer.from(JSON.stringify({ role: 'admin', expiresAt })).toString('base64url');
  const token = `${payload}.${sign(payload)}`;

  return `${sessionCookieName}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${
    sessionDurationMs / 1000
  }`;
}

export function clearSessionCookie() {
  return `${sessionCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`;
}

export function isAuthenticated(req) {
  const token = parseCookies(req.headers.cookie)[sessionCookieName];

  if (!token) {
    return false;
  }

  const [payload, signature] = token.split('.');

  if (!payload || !signature || !timingSafeEqualString(signature, sign(payload))) {
    return false;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return session.role === 'admin' && session.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function requireAdmin(req, res, next) {
  if (!isAuthenticated(req)) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  next();
}
