describe('Example Component', () => {
  
  test( 'Debe de ser mayor a 10', () => {

      // Arreglar
      let value = 10      

      // Estimulo
      value = value + 2

      // Obervar el resultado
      expect(value).toBeGreaterThan(10)
      
  } )

})