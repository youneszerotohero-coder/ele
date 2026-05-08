import AppKit
import PDFKit

let args = CommandLine.arguments

guard args.count == 4 else {
  fputs("Usage: render-pdf-pages.swift input.pdf output-dir filename-prefix\n", stderr)
  exit(2)
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2], isDirectory: true)
let prefix = args[3]

guard let document = PDFDocument(url: inputURL) else {
  fputs("Unable to open PDF: \(inputURL.path)\n", stderr)
  exit(1)
}

try FileManager.default.createDirectory(at: outputURL, withIntermediateDirectories: true)

for index in 0..<document.pageCount {
  guard let page = document.page(at: index) else { continue }

  let pageBounds = page.bounds(for: .mediaBox)
  let scale: CGFloat = 2
  let imageSize = CGSize(width: pageBounds.width * scale, height: pageBounds.height * scale)
  let image = NSImage(size: imageSize)

  image.lockFocus()
  guard let context = NSGraphicsContext.current?.cgContext else {
    image.unlockFocus()
    continue
  }

  NSColor.white.setFill()
  context.fill(CGRect(origin: .zero, size: imageSize))
  context.saveGState()
  context.scaleBy(x: scale, y: scale)
  page.draw(with: .mediaBox, to: context)
  context.restoreGState()
  image.unlockFocus()

  guard
    let tiffData = image.tiffRepresentation,
    let bitmap = NSBitmapImageRep(data: tiffData),
    let imageData = bitmap.representation(using: .jpeg, properties: [.compressionFactor: 0.82])
  else {
    continue
  }

  let filename = "\(prefix)-page-\(String(format: "%02d", index + 1)).jpg"
  try imageData.write(to: outputURL.appendingPathComponent(filename))
}

print(document.pageCount)
