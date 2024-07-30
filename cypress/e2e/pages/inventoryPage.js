class InventoryPage {

      productSortDropdown='.product_sort_container';
      productNames= '.inventory_item_name';
    
      verifySortedByNameAscending() {
        let previous = ''
        cy.get(this.productNames).each(($el) => {
          const current = $el.text().trim()
          expect(current.localeCompare(previous)).to.be.at.least(0)
          previous = current
        })
      }
      
      verifySortedByNameDescending() {
        let previous = 'ZZZZZZZ' // Start with a high value for descending order
        cy.get(this.productNames).each(($el) => {
          const current = $el.text().trim()
          expect(current.localeCompare(previous)).to.be.at.most(0)
          previous = current
        })
      }
  
    sortBy(option) {
      cy.get(this.productSortDropdown).select(option)
    }
  }
  
  export default new InventoryPage()