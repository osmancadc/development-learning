const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
const port = 3250;

app.use(cors());
app.options('*', cors());


const products = [{
    id: 1,
    name: "Chocolate caliente",
    description: "Tazas de chocolate caliente a domicilio con una descripcion muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy larga ",
    qty: 100,
    price: 1500,
    category:"food",
    img: "https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_960_720.jpg,https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg,https://cdn.pixabay.com/photo/2015/02/05/01/33/valentines-day-624440_960_720.jpg,https://cdn.pixabay.com/photo/2017/03/27/14/14/coffee-2179009_960_720.jpg"
}, {
    id: 2,
    name: "Ropa para bebé",
    description: "Ropa variada para bebés de 0 a 5 años de segunda",
    qty: 20,
    price: 25000,
    category:"clothes",
    img: "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_960_720.jpg,https://cdn.pixabay.com/photo/2017/02/08/02/53/baby-2047595_960_720.jpg,https://cdn.pixabay.com/photo/2016/12/06/00/49/baptism-1885303_960_720.jpg,https://cdn.pixabay.com/photo/2020/03/12/19/56/baby-shoes-4926111_960_720.jpg,https://cdn.pixabay.com/photo/2018/02/06/18/56/clothing-3135444_960_720.jpg"
}, {
    id: 3,
    name: "Computador gamer Ryzen 7",
    description: "Cumputador Gamer ryzen 7, tarjeta grafica GTX 2080, 16 gb de RAM",
    qty: 5,
    price: 4325000,
    category:"technology",
    img: "https://i.ytimg.com/vi/RFLIuWLSq_I/maxresdefault.jpg,https://falabella.scene7.com/is/image/FalabellaCO/4064242_1?wid=800&hei=800&qlt=70,data:image/jpeg;base64,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,https://bluegeek.co/wp-content/uploads/2019/08/cpu_gaming_d.jpg"
}, {
    id: 4,
    name: "Utiles escolares",
    description: "Utiles escolares perfectos para el inicio de la temporada escolar en cuarentena",
    qty: 21356,
    price: 15000,
    category:"various",
    img: "https://previews.123rf.com/images/jenifoto/jenifoto1307/jenifoto130700042/21078127-surtido-de-%C3%BAtiles-escolares-aislados-individualmente-en-blanco.jpg,https://cdn.pixabay.com/photo/2018/02/09/12/37/colored-pencils-3141508_960_720.jpg,https://cdn.pixabay.com/photo/2017/08/28/17/36/school-supplies-2690530_960_720.jpg,https://cdn.pixabay.com/photo/2015/09/02/12/28/pencil-918449_960_720.jpg,https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_960_720.jpg"
},{
    id: 5,
    name: "Mouse y teclado",
    description: "combo mouse y teclado perfecto para tu trabajo durante esta cuarentena",
    qty: 53,
    price: 72520,
    category:"technology",
    img: "https://image.freepik.com/foto-gratis/volver-al-concepto-escuela-lapiz-teclado-raton-sobre-fondo-azul-plano-lay_176474-7026.jpg,https://image.freepik.com/foto-gratis/manos-raton-teclado_1232-614.jpg,https://image.freepik.com/foto-gratis/hombre-anonimo-recortado-que-computa-teclado-blanco-que-usa-raton-blanco_1098-18917.jpg,https://image.freepik.com/foto-gratis/vista-aerea-manos-trabajando-computadora-mesa-blanca-oficina_53876-31146.jpg,https://image.freepik.com/foto-gratis/escritorio-ordenado-aplicaciones-oficina_23-2147833239.jpg,https://image.freepik.com/foto-gratis/taza-cafe-teclado-inalambrico-mouse_140725-8960.jpg"
}, ]

const outstanding = [{
    id:1,
    name:"Estación gamer",
    description:"Estacion gamer diseñada ergonomicamente para tus largos periodos de juego, adicional se puede implementar para usar volante y pedales en caso de necesitarlo, cuenta con soporte para 3 pantallas, expandible a 5 y refrigeracion liquida interna para que no se recaliente tu maquina.",
    img:"https://image.freepik.com/foto-gratis/mujeres-felices-jugando-juego-arcade_23-2148253113.jpg"
},{
    id:2,
    name:"Iphones legales",
    description:"Los mejores celulares apple, obtenidos de forma legal por nuestros compradores de confianza, si tu celular tiene manchas de sangre, es gratis! si te encuentra su verdadero dueño tienes un descuento del 10% en la compra de otro iphone.",
    img:"https://image.freepik.com/foto-gratis/hombre-usando-tableta-digital_36325-2222.jpg"
},{
    id:3,
    name:"Cura para el Covid19",
    description:"Utiliza esta biblia para encontrar el pelito magico y hacer una sopa con este, asi curaras milagrosamente el coronavirus.",
    img:"https://image.freepik.com/foto-gratis/libro-cerca-biblia-hermosa-terraza-hora-manana-espacio-texto_169016-4050.jpg"
}]


app.listen(port, () => {
    console.log("Servidor esperando en el puerto " + port)
})

app.get('/all_products', (req, res) => {
    console.log("recibio solicitud todos los productos")
    res.send({ products: products })
    return
})

app.get('/specific_product', (req, res) => {
    console.log("recibio solicitud un producto especifico")
    for (p of products) {
        if (p.id == req.query.id) {
            res.send({ product: p })
        }
    }
    return
})

app.get('/outstanding',(req,res)=>{
    console.log("Recibio solicitud destacados")
    res.send({products:outstanding})
});

app.get('/categories',(req,res)=>{
    console.log("Recibio solicitud categorias")
    res.send({categories:[
        {name:"Ropa",img:"https://image.freepik.com/foto-gratis/mujer-joven-feliz-que-muestra-pantalla-copyspace-blanco-telefono-movil-sosteniendo-perchas-elegantes-prendas-guinando-ojo_273609-756.jpg"},
        {name:"Tecnologia",img:"https://image.freepik.com/foto-gratis/mano-femenina-escribiendo-teclado-portatil_1150-15742.jpg"},
        {name:"Deportivo",img:"https://image.freepik.com/foto-gratis/composicion-deporte-elementos-modernos_23-2147914166.jpg"},
        {name:"Gaming",img:"https://image.freepik.com/foto-gratis/jugadora-profesional-juega-videojuegos-su-computadora-ella-participa-torneos-juegos-ciberneticos-linea-juega-casa-o-cibercafe-ella-usa-auriculares-juegos_116317-587.jpg"},
        {name:"Viajes",img:"https://image.freepik.com/foto-gratis/mujeres-turistas-mano-tienen-feliz-mapa-viaje_1150-7411.jpg"},
        {name:"Escolar",img:"https://image.freepik.com/foto-gratis/libro-fondo-tablero-verde_1150-3837.jpg"},
        {name:"Hogar",img:"https://image.freepik.com/foto-gratis/diseno-apartamento-estudio-moderno-dormitorio-sala-estar_1262-12375.jpg"},
        {name:"Vehiculo",img:"https://image.freepik.com/foto-gratis/hombre-guapo-joven-abrazando-coche-sala-exposicion-automoviles_1303-20419.jpg"},
        {name:"Maquinaria",img:"https://image.freepik.com/foto-gratis/trabajo-masculino-realizado-mujer_1098-13578.jpg"},
    ]})
});


/*
 * Semilla para desencriptacion de las contraseñas  F%0uR1&_3rING$
 */