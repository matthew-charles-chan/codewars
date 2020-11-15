class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    let results = dirtyFileName.split('_')
    results.splice(0, 1)
    console.log(results)
    results = dirtyFileName.split('_').slice(1, 1)
    results.join('_')
    console.log(results)
    // return results
  }
}

FileNameExtractor.extractFileName('1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34')
FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION')
