const LoginPage = require('../pages/loginPage')
const InventoryPage = require('../pages/inventoryPage')

describe('Sort Items Test', () => {

  beforeEach(() => {
    LoginPage.navigate()
    LoginPage.login('standard_user', 'secret_sauce')
    LoginPage.verifyLogin()
  })
  it('Verify that the items are sorted by Name ( A -> Z ) upon logging in.', () => {
    // Verify items are sorted by Name (A to Z)
    InventoryPage.verifySortedByNameAscending()
  })


  it('Change the sorting to Name ( Z -> A) and Verify that the items are sorted correctly.', () => {
  
    // Change sorting to Name (Z to A)
    InventoryPage.sortBy('za')

    // Verify items are sorted by Name (Z to A)
    InventoryPage.verifySortedByNameDescending()
  })
})