const expect = chai.expect

describe ("se realizan las sumas correctamente", () =>{
    const sumar = (a,b) => a + b
    const multiplicar = (a,b) => a*b

    it ('al sumar 3+5 debe dar 8', () => {
        expect(sumar (3,5 ) ).to.be.equal(8) 
    })
    it ('al multiplicar 3 y 5 debe dar 15', () => {
        expect(multiplicar (3,5) ).to.be.equal(15)
    })
    it ('al sumar 2+4 debe dar 6', () => {
        expect(sumar (2,4 ) ).to.be.equal(6) 
    })
})


    describe ("pruebas fibonacci", () => {
        const fibonacci = ( n ) => 2

        it ("la suma de la secuencia de fibonacci para 2 es 2", () => {
            expect( fibonacci(2) ).to.be.equal(2)
        })        
        it ("la suma de la secuencia de fibonacci para 3 es 4", () => {
        expect( fibonacci(3) ).to.be.equal(4)
    })


})


/*
describe ("FIBONACCI", () => {
    const deseado = [1,2,3,4,5,6,7,8];
   /////// cambiar todo para utilizarlo con arreglos 
    for (i=0; i<8; i++)
    {
        const evaluando = i;
        const esperado = i-1 + i-2;
        if (i==0)
        {
            esperado = 0;
            it ("la suma de la secuencia fibonacci es", () => {
                expect(evaluando).to.be.equal(esperado)
            })
        }
        else if (i ==1)
        {
            esperado = 1;
            it ("la suma de la secuencia fibonacci es", () => {
                expect( evaluando ).to.be.equal(esperado)
            })
        }
        else if (i ==2)
        {
            esperado = 1;
            it ("la suma de la secuencia fibonacci es", () => {
                expect(evaluando).to.be.equal(esperado)
            })
        }
        else {
        it ("la suma de la secuencia fibonacci es", () => {
            expect(evaluando).to.be.equal(esperado)
        })
    }
    }

})
*/

