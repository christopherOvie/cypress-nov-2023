
describe('file download', () => {
    it('test excel file download', () => {
       cy.visit('https://www.smartsheet.com/test-case-templates-examples')
       cy.get('button[style*="color: rgb(25, 87, 222); border-radius: 5px; ba"] > .root__mAWHD').click()

       cy.get("a[href='/file/ic-test-case-planning-and-execution-template-10549xlsx']").then(($el) => {
      const url=  $el.prop("href")

      cy.downloadFile(url,'cypress/downloads','excel.xlsx')
      cy.verifyDownload('excel.xlsx');
       })

    });
})

//cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')