const initialState = {
    eventos : [
        {
            name:"Ayudanos a limpiar el dinosaurio",
            startDay:"1/2/2023",
            endDay:"5/2/2023",
            price: 1000,
            img:"https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_770,h_513/https://serlim.net/wp-content/uploads/museo-770x513.jpg",
            information:"Los museos y los centros culturales son espacios exclusivos dedicados a la contemplación de obras de arte, piezas teatrales o musicales. Miles de personas acuden a estos espacios a diario a deleitarse con las obras de arte, por lo que la limpieza de un museo o centro cultural en muy importante, tanto para la higiene del mismo, como por la imagen que quiera transmitir.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Social"}]
          },
          {
            name:"No cortar los árboles",
            startDay:"20/12/2022",
            endDay:"25/12/2022",
            price: 500,
            img:"https://media.istockphoto.com/id/1317323736/es/foto/una-vista-hacia-el-cielo-de-direcci%C3%B3n-de-los-%C3%A1rboles.jpg?b=1&s=170667a&w=0&k=20&c=nxfM82dsNQMl8m_FuxaWEU7z7EYRAGWi061Vhe7yBFQ=",
            information:"Algunas especies utilizadas en espacio público: Ceibo, Jacarandá, Palo borracho, Tipa, Timbó, Ibirá-pitá, Guarán -guarán, Aliso de río, Sauce criollo, Aguaribay, Curupí, Ombú, Fumo Bravo, Lapacho.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Social"}]
          },
          {
            name:"Exhibición de Cs.",
            startDay:"3/2/2023",
            endDay:"7/2/2023",
            price: 4000,
            img:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQTuuXWfjM-tRGEKLl6HVc_jXC0wbaI36kxP0qaeHOYR9_MUMeUqnUyTvgURC963DNe",
            information:"La ciencia es un conjunto de conocimientos sistemáticos comprobables que estudian, explican y predicen los fenómenos sociales, artificiales y naturales.​ El conocimiento científico se obtiene de manera metodológica mediante observación y experimentación en campos de estudio específicos.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Astrologia Juntos",
            startDay:"3/6/2022",
            endDay:"10/6/2022",
            price: 3500,
            img:"https://www.clarin.com/img/2022/07/08/kTYoJwcpL_600x600__1.jpg",
            information:"La astrología es una gama de prácticas adivinatorias, reconocidas como pseudocientíficas desde el siglo XVIII, que pretenden discernir información sobre asuntos humanos y eventos terrestres mediante el estudio de las posiciones aparentes de los objetos celestes.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Convocatoria del XIX Salón de Arte Textil 2023",
            startDay:"1/3/2023",
            endDay:"5/3/2023",
            price:3200,
            img:"https://elvoceroporteno.com.ar/wp-content/uploads/2022/12/12-25-convocatoria-arte-textil.jpg",
            information:"Se trata de una convocatoria anual en la que participan artistas nacionales y extranjeros. Las obras seleccionadas y premiadas por el jurado brindan al visitante una muestra amplia y actual de este campo artístico.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Susurros y secretos: los misterios del arte",
            startDay:"20/1/2023",
            endDay:"20/2/2023",
            price: 120,
            img:"https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/12/Rwswm0kg-750x500.jpeg",
            information:"En la 18º Fiesta de la Lectura tendremos la oportunidad única de descubrir los secretos mejor guardados del Malba. ¿Qué hay en la misteriosa sala oscura? ¿Qué significan los extraños símbolos en la obra de Xul Solar? ¿Por qué Frida Kahlo se retrató con un tercer ojo?",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Taller de banderas",
            startDay:"4/2/2023",
            endDay:"12/2/2023",
            price: 1200,
            img:"https://www.cultura.gob.ar/media/uploads/20190102_162334_horizontal.jpg",
            information:"¿Un taller para crear tu propia bandera? ¡Sí! Con el artista Lino Divas vamos a crear y reflexionar sobre las banderas como símbolo de lucha, compromiso e identidad.",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Jam de dibujo",
            startDay:"2/1/2023",
            endDay:"9/1/2023",
            price: 630,
            img:"https://www.cultura.gob.ar/media/uploads/05-02_jam_de_dibujo_1.jpg",
            information:"La “JAM de Dibujo” es un encuentro para dibujantes y público en general, donde posa un modelo acompañado de música. Se practica el “croquis” (dibujo informal) en que el/la modelo/a hace diferentes poses que varían cada cierta cantidad de minutos. El encuentro tiene una duración total de 2 horas con un recreo de 15 min.Se realizará en el jardín del Museo, traer protector solar, repelente y agua. El museo dispondrá de los elementos para la actividad aunque se sugiere traer sus propios materiales de dibujo y pintura. ",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Poses y brillos",
            startDay:"1/2/2023",
            endDay:"6/2/2023",
            price: 2100,
            img:"https://www.cultura.gob.ar/media/uploads/lila_llunez_3.jpg",
            information:"La propuesta es dibujar a un modelo que trabaja a partir de los cruces entre arte, transformismo y estéticas Drag Queen y Drag King. ¡No hace falta que sepas dibujar ni tengas experiencia artística! ",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Conservación de testimonios fotográficos",
            startDay:"1/2/2023",
            endDay:"7/2/2023",
            price: 520,
            img:"https://www.cultura.gob.ar/media/uploads/taller_de_fotografia_-_mhnor.jpeg",
            information:"Se enseñará al público asistente técnicas de conservación a fotografías antiguas que guardan imágenes con valiosa información que  atesoramos. ",
            guide:[{name:"",image:""}],
            category:[{name:"Ecológico"}]
          },
          {
            name:"Taller de máscaras, coplas y danza",
            startDay:"5/11/2022",
            endDay:"20/11/2022",
            price: 600,
            img:"https://www.cultura.gob.ar/media/uploads/1_1.jpeg",
            information:"Talleres de arte al aire libre para jugar, crear y divertirse junto al equipo educativo del Museo Nacional Terry.  Actividad a cargo de Virginia Chialvo, Martín Esquivel Viveros y Sinty Cruz Machaca",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Limpiarse energéticamente",
            startDay:"7/2/2023",
            endDay:"28/2/2023",
            price: 1500,
            img:"https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/FsqtoROdx9EBYlv4yD_PTpZb1qI=/1440x0/smart/filters:quality(85):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/PEYQQCQ2LZAZPCZIULEDFMCBEQ.jpg",
            information:"La especialista en astrología Mhoni Vidente, compartió lo que les depara a Libre, Escorpio y Sagitario en febrero y resaltó la importancia de las energías que los rodean.",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Arqueología",
            startDay:"28/1/2023",
            endDay:"3/2/2023",
            price: 2600,
            img:"https://humanidades.com/wp-content/uploads/2019/02/Arqueologia-e1587324565612.jpg",
            information:"La arqueología es la ciencia dedicada al estudio de las sociedades antiguas, a través del hallazgo, descripción e interpretación de sus restos conservados, como ruinas, utensilios, obras de arte, objetos ceremoniales e incluso restos humanos. Su nombre proviene del griego archaios, “viejo”, y logos, “conocimiento”",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Cumple con la Ciencia",
            startDay:"6/3/2022",
            endDay:"22/3/2022",
            price: 800,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5yvRhiqUpGE3mK3f3bMQ7d4gudTf2tnBXA&usqp=CAU",
            information:"Aprenderás a ser un buen rastreador y naturalista. Con huellas pistas y animales naturalizados del museo conocerás a diferentes especies de osos que viven en el planeta su vida costumbres y amenazas. ",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Plantemos árboles entre todos",
            startDay:"12/12/2022",
            endDay:"6/2/2023",
            price: 900,
            img:"https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg",
            information:"La ecología es una ciencia que bebe de la biología, la química, la geología, las matemáticas o la física. Persigue, tal como perseguía Humboldt, entender las complejas relaciones que mantienen los seres vivos entre sí y con su medio, comprender los entresijos de los sistemas ecológicos.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Social"}]
          },
    ],

    alleventos: [
        {
            name:"Ayudanos a limpiar el dinosaurio",
            startDay:"1/2/2023",
            endDay:"5/2/2023",
            price: 1000,
            img:"https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_770,h_513/https://serlim.net/wp-content/uploads/museo-770x513.jpg",
            information:"Los museos y los centros culturales son espacios exclusivos dedicados a la contemplación de obras de arte, piezas teatrales o musicales. Miles de personas acuden a estos espacios a diario a deleitarse con las obras de arte, por lo que la limpieza de un museo o centro cultural en muy importante, tanto para la higiene del mismo, como por la imagen que quiera transmitir.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Social"}]
          },
          {
            name:"No cortar los árboles",
            startDay:"20/12/2022",
            endDay:"25/12/2022",
            price: 500,
            img:"https://media.istockphoto.com/id/1317323736/es/foto/una-vista-hacia-el-cielo-de-direcci%C3%B3n-de-los-%C3%A1rboles.jpg?b=1&s=170667a&w=0&k=20&c=nxfM82dsNQMl8m_FuxaWEU7z7EYRAGWi061Vhe7yBFQ=",
            information:"Algunas especies utilizadas en espacio público: Ceibo, Jacarandá, Palo borracho, Tipa, Timbó, Ibirá-pitá, Guarán -guarán, Aliso de río, Sauce criollo, Aguaribay, Curupí, Ombú, Fumo Bravo, Lapacho.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Social"}]
          },
          {
            name:"Exhibición de Cs.",
            startDay:"3/2/2023",
            endDay:"7/2/2023",
            price: 4000,
            img:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQTuuXWfjM-tRGEKLl6HVc_jXC0wbaI36kxP0qaeHOYR9_MUMeUqnUyTvgURC963DNe",
            information:"La ciencia es un conjunto de conocimientos sistemáticos comprobables que estudian, explican y predicen los fenómenos sociales, artificiales y naturales.​ El conocimiento científico se obtiene de manera metodológica mediante observación y experimentación en campos de estudio específicos.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Astrologia Juntos",
            startDay:"3/6/2022",
            endDay:"10/6/2022",
            price: 3500,
            img:"https://www.clarin.com/img/2022/07/08/kTYoJwcpL_600x600__1.jpg",
            information:"La astrología es una gama de prácticas adivinatorias, reconocidas como pseudocientíficas desde el siglo XVIII, que pretenden discernir información sobre asuntos humanos y eventos terrestres mediante el estudio de las posiciones aparentes de los objetos celestes.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Convocatoria del XIX Salón de Arte Textil 2023",
            startDay:"1/3/2023",
            endDay:"5/3/2023",
            price:3200,
            img:"https://elvoceroporteno.com.ar/wp-content/uploads/2022/12/12-25-convocatoria-arte-textil.jpg",
            information:"Se trata de una convocatoria anual en la que participan artistas nacionales y extranjeros. Las obras seleccionadas y premiadas por el jurado brindan al visitante una muestra amplia y actual de este campo artístico.",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Susurros y secretos: los misterios del arte",
            startDay:"20/1/2023",
            endDay:"20/2/2023",
            price: 120,
            img:"https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/12/Rwswm0kg-750x500.jpeg",
            information:"En la 18º Fiesta de la Lectura tendremos la oportunidad única de descubrir los secretos mejor guardados del Malba. ¿Qué hay en la misteriosa sala oscura? ¿Qué significan los extraños símbolos en la obra de Xul Solar? ¿Por qué Frida Kahlo se retrató con un tercer ojo?",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Taller de banderas",
            startDay:"4/2/2023",
            endDay:"12/2/2023",
            price: 1200,
            img:"https://www.cultura.gob.ar/media/uploads/20190102_162334_horizontal.jpg",
            information:"¿Un taller para crear tu propia bandera? ¡Sí! Con el artista Lino Divas vamos a crear y reflexionar sobre las banderas como símbolo de lucha, compromiso e identidad.",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Jam de dibujo",
            startDay:"2/1/2023",
            endDay:"9/1/2023",
            price: 630,
            img:"https://www.cultura.gob.ar/media/uploads/05-02_jam_de_dibujo_1.jpg",
            information:"La “JAM de Dibujo” es un encuentro para dibujantes y público en general, donde posa un modelo acompañado de música. Se practica el “croquis” (dibujo informal) en que el/la modelo/a hace diferentes poses que varían cada cierta cantidad de minutos. El encuentro tiene una duración total de 2 horas con un recreo de 15 min.Se realizará en el jardín del Museo, traer protector solar, repelente y agua. El museo dispondrá de los elementos para la actividad aunque se sugiere traer sus propios materiales de dibujo y pintura. ",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Poses y brillos",
            startDay:"1/2/2023",
            endDay:"6/2/2023",
            price: 2100,
            img:"https://www.cultura.gob.ar/media/uploads/lila_llunez_3.jpg",
            information:"La propuesta es dibujar a un modelo que trabaja a partir de los cruces entre arte, transformismo y estéticas Drag Queen y Drag King. ¡No hace falta que sepas dibujar ni tengas experiencia artística! ",
            guide:[{name:"Soledad",image:"https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Conservación de testimonios fotográficos",
            startDay:"1/2/2023",
            endDay:"7/2/2023",
            price: 520,
            img:"https://www.cultura.gob.ar/media/uploads/taller_de_fotografia_-_mhnor.jpeg",
            information:"Se enseñará al público asistente técnicas de conservación a fotografías antiguas que guardan imágenes con valiosa información que  atesoramos. ",
            guide:[{name:"",image:""}],
            category:[{name:"Ecológico"}]
          },
          {
            name:"Taller de máscaras, coplas y danza",
            startDay:"5/11/2022",
            endDay:"20/11/2022",
            price: 600,
            img:"https://www.cultura.gob.ar/media/uploads/1_1.jpeg",
            information:"Talleres de arte al aire libre para jugar, crear y divertirse junto al equipo educativo del Museo Nacional Terry.  Actividad a cargo de Virginia Chialvo, Martín Esquivel Viveros y Sinty Cruz Machaca",
            guide:[{name:"Claudio",image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],
            category:[{name:"Arte"}]
          },
          {
            name:"Limpiarse energéticamente",
            startDay:"7/2/2023",
            endDay:"28/2/2023",
            price: 1500,
            img:"https://radiomitre-la100-prod.cdn.arcpublishing.com/resizer/FsqtoROdx9EBYlv4yD_PTpZb1qI=/1440x0/smart/filters:quality(85):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/radiomitre/PEYQQCQ2LZAZPCZIULEDFMCBEQ.jpg",
            information:"La especialista en astrología Mhoni Vidente, compartió lo que les depara a Libre, Escorpio y Sagitario en febrero y resaltó la importancia de las energías que los rodean.",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Arqueología",
            startDay:"28/1/2023",
            endDay:"3/2/2023",
            price: 2600,
            img:"https://humanidades.com/wp-content/uploads/2019/02/Arqueologia-e1587324565612.jpg",
            information:"La arqueología es la ciencia dedicada al estudio de las sociedades antiguas, a través del hallazgo, descripción e interpretación de sus restos conservados, como ruinas, utensilios, obras de arte, objetos ceremoniales e incluso restos humanos. Su nombre proviene del griego archaios, “viejo”, y logos, “conocimiento”",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Cumple con la Ciencia",
            startDay:"6/3/2022",
            endDay:"22/3/2022",
            price: 800,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5yvRhiqUpGE3mK3f3bMQ7d4gudTf2tnBXA&usqp=CAU",
            information:"Aprenderás a ser un buen rastreador y naturalista. Con huellas pistas y animales naturalizados del museo conocerás a diferentes especies de osos que viven en el planeta su vida costumbres y amenazas. ",
            guide:[{name:"Martin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1OaBc6dMQDEAQkgnu8f3JVaiSQSs_Ibh2w&usqp=CAU"}],
            category:[{name:"Ciencias"}]
          },
          {
            name:"Plantemos árboles entre todos",
            startDay:"12/12/2022",
            endDay:"6/2/2023",
            price: 900,
            img:"https://cdn0.ecologiaverde.com/es/posts/7/9/3/cuales_son_las_ramas_de_la_ecologia_y_que_estudia_cada_una_1397_orig.jpg",
            information:"La ecología es una ciencia que bebe de la biología, la química, la geología, las matemáticas o la física. Persigue, tal como perseguía Humboldt, entender las complejas relaciones que mantienen los seres vivos entre sí y con su medio, comprender los entresijos de los sistemas ecológicos.",
            guide:[{name:"Karen",image:"https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"}],
            category:[{name:"Social"}]
          },
    ],
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        
        case 'FILTER_EVENT_BY_CATEGORY':
            const alleventos = state.alleventos;
            const statusFiltered = action.payload === 'All' ? alleventos : alleventos.filter(el => el.category[0].name === action.payload)
            return {
                ...state,
                eventos: statusFiltered,
            }

        case 'ORDER_BY_NAME':
                
                const sortedArr = action.payload === 'asc' ?
                state.eventos.sort(function(a, b) {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.eventos.sort(function(a, b) {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return {
                    ...state,
                    eventos: sortedArr
                }
                
        case 'FILTER_EVENT_BY_PRICE':
            const filterPrice = action.payload === 'ascprec' ?
            state.eventos.sort(function(a, b) {
                if(a.price < b.price) {
                    return 1;
                }
                if(b.price < a.price) {
                    return -1;
                }
                return 0;
            }) :
            state.eventos.sort(function(a, b) {
                if(a.price < b.price) {
                    return -1;
                }
                if(b.price < a.price) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                eventos: filterPrice
            }


            default: return state;

}
};

export default rootReducer;