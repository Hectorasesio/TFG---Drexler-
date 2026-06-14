/* =====================================================================
   DATA — Contenido de las siete fichas científicas
   "Todo se transforma" · Atril interactivo · TFG
   ---------------------------------------------------------------------
   Cada entrada tiene:
     color   -> variable CSS del color de acento del verso
     tag      -> etiqueta superior (nº de transformación + tipo)
     label    -> título de la transformación
     quote    -> verso de la canción (se renderiza en lettering manuscrito)
     media    -> { type:"svg", svg:"..." }  ó  { type:"photo", src:"img/...", alt:"...", credit:"..." }
     explain  -> texto divulgativo-científico
     pk / pv  -> bloque "Principio": clave + valor
   ---------------------------------------------------------------------
   NOTA SOBRE LAS FOTOS:
   Las fichas 03, 04 y 05 usan fotografía de archivo. Descarga imágenes
   libres de derechos y guárdalas en una carpeta /img del proyecto:
     · molino.jpg  -> molino/aerogenerador en paisaje (Unsplash / Wikimedia)
     · vino.jpg     -> pisado de uva o racimos (Unsplash / Wikimedia)
     · galaxia.jpg  -> galaxia o nebulosa (NASA, dominio público:
                       images.nasa.gov / hubblesite.org)
   Mientras no las tengas, el código muestra un placeholder con el texto alt.
   ===================================================================== */

const DATA = {
  "1": {
    color: "var(--naranja)",
    tag: "Transformación 01 · energía química → térmica",
    label: "Del enlace químico al calor",
    quote: "\u201CTu beso se hizo calor\u201D",
    media: {
      type: "svg",
      svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="55" cy="60" r="9" stroke="var(--naranja)" stroke-width="2.5"/>
        <circle cx="85" cy="42" r="9" stroke="var(--naranja)" stroke-width="2.5"/>
        <circle cx="85" cy="78" r="9" stroke="var(--naranja)" stroke-width="2.5"/>
        <line x1="63" y1="55" x2="78" y2="46" stroke="var(--naranja)" stroke-width="2.5"/>
        <line x1="63" y1="65" x2="78" y2="74" stroke="var(--naranja)" stroke-width="2.5"/>
        <path d="M120 75 C112 60 128 55 122 40" stroke="var(--naranja)" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>
        <path d="M138 80 C130 62 148 56 140 38" stroke="var(--naranja)" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>
        <path d="M156 75 C148 60 164 55 158 40" stroke="var(--naranja)" stroke-width="2.5" stroke-linecap="round" opacity=".55"/>
      </svg>`
    },
    explain: "El cuerpo humano funciona con energía química almacenada en los enlaces de moléculas como la glucosa. Al metabolizarse, esos enlaces se rompen durante la respiración celular y liberan energía: una parte se aprovecha como trabajo y el resto se disipa en forma de calor. Ese calor es lo que mantiene la temperatura corporal en torno a los 37 °C y lo que se percibe en el contacto de la piel.",
    pk: "Principio",
    pv: "La respiración celular es una reacción exotérmica: oxida la glucosa y libera energía aprovechable (ATP) junto con calor residual."
  },

  "2": {
    color: "var(--amarillo)",
    tag: "Transformación 02 · energía térmica → cinética",
    label: "Del calor al viento",
    quote: "\u201CEl calor, movimiento\u2026 vapor, luego viento\u201D",
    media: {
      type: "svg",
      svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round">
        <path d="M30 45 H120 C140 45 140 22 124 22 C112 22 112 38 122 38" stroke="var(--amarillo)" stroke-width="3"/>
        <path d="M30 65 H150 C172 65 172 90 154 90 C142 90 142 76 152 76" stroke="var(--amarillo)" stroke-width="3"/>
        <path d="M30 85 H95 C112 85 112 105 98 105 C88 105 88 94 96 94" stroke="var(--amarillo)" stroke-width="3" opacity=".6"/>
      </svg>`
    },
    explain: "El verso comprime tres fenómenos físicos. El calor aumenta la energía cinética de las moléculas de agua del sudor hasta que algunas escapan en forma de vapor: es la evaporación. A escala atmosférica, el aire calentado por el Sol se dilata, pierde densidad y asciende, mientras el aire más frío ocupa su lugar. Ese desplazamiento de masas de aire por diferencias de temperatura y presión es, literalmente, el viento.",
    pk: "Principio",
    pv: "La energía térmica se convierte en energía cinética. Las diferencias de temperatura generan diferencias de presión, y el aire se desplaza de la zona de mayor presión a la de menor."
  },

  "3": {
    color: "var(--azul)",
    tag: "Transformación 03 · energía cinética → mecánica",
    label: "Del viento al trabajo",
    quote: "\u201CMovió el aspa de un molino\u201D",
    media: {
      type: "photo",
      src: "img/molino.jpg",
      alt: "Molino o aerogenerador en un paisaje de La Rioja",
      credit: "Foto de archivo · sustituir por imagen libre de derechos"
    },
    explain: "El viento transporta energía cinética proporcional al cuadrado de su velocidad. Al chocar contra las aspas inclinadas, parte de esa energía se transfiere como un par de fuerzas que las hace girar: la energía cinética se convierte en trabajo mecánico rotatorio. Es el mismo principio de un aerogenerador, que acopla ese giro a un generador para producir electricidad.",
    pk: "Principio",
    pv: "El límite de Betz establece que ninguna turbina puede extraer más del 59,3 % de la energía cinética del viento; las actuales rondan el 45–50 %."
  },

  "4": {
    color: "var(--verde)",
    tag: "Transformación 04 · conservación de la materia",
    label: "La materia se reordena",
    quote: "\u201CSe pisaba el vino que bebió tu boca roja\u201D",
    media: {
      type: "photo",
      src: "img/vino.jpg",
      alt: "Pisado de uva o racimos durante la vendimia",
      credit: "Foto de archivo · sustituir por imagen libre de derechos"
    },
    explain: "El verso pasa de la energía a la materia. Al pisar la uva y fermentar el mosto, las levaduras transforman los azúcares (glucosa y fructosa) en etanol y dióxido de carbono. No se crea ni se destruye materia: los mismos átomos de carbono, hidrógeno y oxígeno se reorganizan en moléculas distintas. La ecuación de la fermentación está balanceada precisamente porque la masa se conserva.",
    pk: "Principio (Lavoisier)",
    pv: "En una reacción química, la masa total de los reactivos es igual a la de los productos. Lavoisier estableció la conservación de la masa a finales del siglo XVIII."
  },

  "5": {
    color: "var(--rosa)",
    tag: "Transformación 05 · origen estelar de la materia",
    label: "Polvo de estrellas",
    quote: "\u201CDe algún lejano rincón de otra galaxia\u201D",
    media: {
      type: "photo",
      src: "img/galaxia.jpg",
      alt: "Galaxia o nebulosa",
      credit: "Imagen NASA · dominio público (images.nasa.gov)"
    },
    explain: "La afirmación es físicamente literal. Tras el Big Bang solo existían hidrógeno y helio; todos los elementos más pesados —el carbono de las moléculas orgánicas, el oxígeno que respiramos, el hierro de la sangre, el calcio de los huesos— se forjaron por fusión nuclear en el interior de las estrellas y se dispersaron al espacio cuando estas murieron. Esa materia se reintegró en nuevas estrellas, planetas y, finalmente, en seres vivos.",
    pk: "Principio",
    pv: "La nucleosíntesis estelar produce los elementos pesados mediante fusión nuclear. La materia de la que estamos hechos procede de generaciones anteriores de estrellas."
  },

  "6": {
    color: "var(--azul-claro)",
    tag: "Transformación 06 · conservación en sistemas abiertos",
    label: "La materia que circula",
    quote: "\u201CAquel euro italiano\u2026 en Torino, en Prato\u201D",
    media: {
      type: "svg",
      svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--azul-claro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="38" cy="60" r="13"/>
        <text x="38" y="65" font-size="13" fill="var(--azul-claro)" text-anchor="middle" stroke="none" font-family="sans-serif">€</text>
        <path d="M55 60 H85" stroke-dasharray="2 5"/>
        <rect x="88" y="48" width="26" height="24" rx="2"/>
        <path d="M118 60 H148" stroke-dasharray="2 5"/>
        <path d="M150 70 L162 70 L168 56 L156 56 Z"/>
      </svg>`
    },
    explain: "El segundo verso traslada la idea a los objetos cotidianos: el euro, el vagón, el zapato fabricado en Prato. Nada se ha creado para esta historia; todo estaba ya circulando y solo ha cambiado de localización y de propietario a través de una red de intercambios. Es la conservación de la materia aplicada a un sistema abierto, donde los elementos entran, circulan y salen, pero no desaparecen.",
    pk: "Principio",
    pv: "En un sistema, la materia se conserva mientras se transfiere entre sus partes. La trazabilidad de un objeto es el registro físico de esas transferencias."
  },

  "7": {
    color: "var(--rosa)",
    tag: "Estribillo · los dos principios de conservación",
    label: "Nada se pierde",
    quote: "\u201CNada se pierde, todo se transforma\u201D",
    media: {
      type: "svg",
      svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="var(--rosa)" stroke-width="3" stroke-linecap="round">
        <path d="M150 50 A45 45 0 1 0 156 78" />
        <path d="M134 32 L152 49 L130 56" stroke-linejoin="round"/>
        <circle cx="100" cy="62" r="4" fill="var(--rosa)" stroke="none"/>
      </svg>`
    },
    explain: "El estribillo enuncia, en seis palabras, dos leyes fundamentales. La conservación de la masa (Lavoisier) afirma que la materia no se crea ni se destruye en una reacción química. El primer principio de la termodinámica afirma lo mismo de la energía: la energía total de un sistema aislado permanece constante, solo cambia de forma. La canción funde ambas en una sola cadena que nunca pierde nada por el camino.",
    pk: "Principio",
    pv: "Conservación de la masa (Lavoisier, s. XVIII) y conservación de la energía (primer principio de la termodinámica, s. XIX): dos pilares independientes que el verso reúne."
  }
};
