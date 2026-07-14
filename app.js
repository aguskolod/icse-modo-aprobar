(() => {
  const EXAMS = window.ICSE_EXAMS || [];
  const STORAGE_KEY = "icse-modo-aprobar-v1";

  const lessons = [
    {
      id: "bases",
      title: "Estado, gobierno, régimen y nación",
      description: "Las distinciones que aparecen una y otra vez y regalan puntos si están claras.",
      minutes: 45,
      priority: "ALTA",
      source: "Primer parcial · págs. 2-18",
      reading: [
        ["Regímenes políticos", "Apuntes/1mer%20parcial%20ICSE.pdf#page=2"],
        ["Estado y gobierno", "Apuntes/1mer%20parcial%20ICSE.pdf#page=5"],
        ["Nación", "Apuntes/1mer%20parcial%20ICSE.pdf#page=11"],
        ["Democracia y poliarquía", "Apuntes/1mer%20parcial%20ICSE.pdf#page=16"]
      ],
      keys: [
        "Estado: estructura institucional relativamente permanente que ejerce autoridad sobre un territorio y una población. Incluye leyes, burocracia, impuestos y monopolio legítimo de la fuerza.",
        "Gobierno: conjunto temporal de personas que conduce el Estado. Puede cambiar el gobierno sin que cambie el régimen.",
        "Régimen político: reglas que organizan cómo se accede al poder y cómo se lo ejerce. Puede ser democrático, autoritario, totalitario o híbrido.",
        "Nación: comunidad histórica e imaginada unida por identidad, memoria, cultura o proyecto común. No siempre coincide con las fronteras de un Estado.",
        "Democracia representativa: elecciones competitivas y periódicas, participación, oposición real, libertades y derechos políticos.",
        "Poliarquía, en Dahl: competencia, inclusión, libertades y gobernantes electos que pueden ejercer sin vetos de poderes no elegidos.",
        "Estado liberal: en sus orígenes combina gobierno representativo, división de poderes y liberalismo económico."
      ],
      trap: "Si una opción dice que democracia es solamente votar, está incompleta. Si equipara Estado con gobierno o nación con Estado, casi siempre es falsa.",
      recall: ["¿Puede cambiar el gobierno sin cambiar el régimen?", "Sí. Cambian quienes gobiernan, pero pueden mantenerse las mismas reglas de acceso y ejercicio del poder."]
    },
    {
      id: "dictaduras",
      title: "Golpes, dictaduras y derechos humanos",
      description: "El núcleo conceptual para entender 1966-1983 y reconocer las trampas del primer parcial.",
      minutes: 40,
      priority: "ALTA",
      source: "Primer parcial · págs. 23-30",
      reading: [
        ["Golpes y transiciones", "Apuntes/1mer%20parcial%20ICSE.pdf#page=23"],
        ["Dictaduras", "Apuntes/1mer%20parcial%20ICSE.pdf#page=26"],
        ["Terrorismo y genocidio", "Apuntes/1mer%20parcial%20ICSE.pdf#page=27"],
        ["Romero 1966-1989", "Apuntes/1mer%20parcial%20ICSE.pdf#page=29"]
      ],
      keys: [
        "Golpe de Estado: interrupción ilegal del orden institucional mediante fuerza o presión de actores civiles y/o militares.",
        "Dictadura: concentra el poder, limita libertades y elimina o manipula la competencia política.",
        "Terrorismo de Estado: el propio aparato estatal usa represión ilegal o clandestina para disciplinar a la población.",
        "1966: Onganía, disolución del Congreso, intervención universitaria y Noche de los Bastones Largos. En 1969, el Cordobazo acelera el desgaste del régimen.",
        "1976: Proceso de Reorganización Nacional, poder fragmentado entre las armas, represión clandestina y transformación económica.",
        "Alfonsín: CONADEP, Juicio a las Juntas, luego Punto Final, Obediencia Debida y levantamientos carapintadas en un contexto económico cada vez más crítico."
      ],
      trap: "Terrorismo de Estado no es cualquier violencia política: la diferencia es que usa recursos, agentes y capacidad coercitiva del Estado, muchas veces de forma clandestina.",
      recall: ["¿Qué puso a prueba la democracia en Semana Santa de 1987?", "El levantamiento carapintada contra los juicios por la represión; luego se sancionó la Ley de Obediencia Debida."]
    },
    {
      id: "menem",
      title: "Menem y la gran transformación",
      description: "1989-1999: hiperinflación, giro neoliberal, convertibilidad, reforma y desgaste.",
      minutes: 55,
      priority: "CRÍTICA",
      source: "Segundo parcial · págs. 2-3",
      reading: [["Romero 1989-1999", "Apuntes/2do%20parcial%20ICSE.pdf#page=2"]],
      keys: [
        "1989: Alfonsín entrega anticipadamente el poder en medio de hiperinflación y crisis social. Menem construye una conducción personalista y concentra poder.",
        "El menemismo realiza un giro neoliberal: privatizaciones, apertura, desregulación, ajuste del Estado y alineamiento con Estados Unidos.",
        "1991: Cavallo establece la convertibilidad, 1 peso = 1 dólar. Detiene la inflación, pero quita flexibilidad monetaria y deja un peso sobrevaluado.",
        "Los indultos cierran el ciclo de enfrentamientos militares, pero abren una fuerte discusión sobre impunidad.",
        "Pacto de Olivos y reforma de 1994: reelección, balotaje, jefe de Gabinete, Consejo de la Magistratura y autonomía de CABA.",
        "Tras la reelección de 1995 crecen desempleo y pobreza. El conflicto Menem-Duhalde deja al peronismo dividido y facilita la victoria de la Alianza en 1999."
      ],
      trap: "La convertibilidad no fue sólo buena ni sólo mala: bajó la inflación al principio, pero rigidizó y encareció la economía. Menem fue peronista en identidad política, pero no aplicó el programa económico clásico del peronismo.",
      recall: ["¿Por qué la convertibilidad era una trampa al final de los noventa?", "Porque impedía devaluar o emitir libremente, con un peso caro, recesión, déficit y deuda crecientes."]
    },
    {
      id: "alianza",
      title: "Alianza y crisis de 2001",
      description: "La secuencia más preguntada: recesión, ajustes, voto bronca, corralito y renuncia.",
      minutes: 60,
      priority: "CRÍTICA",
      source: "Segundo parcial · págs. 3, 17-18",
      reading: [
        ["Inicio de la Alianza", "Apuntes/2do%20parcial%20ICSE.pdf#page=3"],
        ["Romero 1999-2005", "Apuntes/2do%20parcial%20ICSE.pdf#page=17"]
      ],
      keys: [
        "De la Rúa recibe recesión, deuda, déficit, desempleo, convertibilidad rígida y un peronismo fuerte en Senado y provincias.",
        "El ajuste reduce actividad y recaudación; cae la recaudación, crece el déficit y se exige otro ajuste. Ese es el círculo vicioso.",
        "Blindaje, megacanje y déficit cero intentan recuperar confianza, pero aumentan deuda, recortes y percepción de insolvencia.",
        "Octubre de 2001: voto bronca y crecimiento de alternativas expresan una crisis de representación, no una simple derrota electoral.",
        "El corralito restringe retiros bancarios. En diciembre hay protestas, saqueos, estado de sitio y renuncia de De la Rúa.",
        "La caída no se explica por una sola causa: economía, decisiones políticas, debilidad de la coalición y crisis de representación se retroalimentan."
      ],
      trap: "Desconfiá de explicaciones monocausales: no fue exclusivamente el FMI, el peronismo, la convertibilidad ni una sola medida. Las preguntas correctas suelen combinar restricciones heredadas y errores políticos.",
      recall: ["¿Cómo funcionaba el círculo vicioso del ajuste?", "Ajuste → más recesión → menor recaudación → mayor déficit → nuevo ajuste."]
    },
    {
      id: "salida",
      title: "Duhalde, salida de la crisis y Kirchner",
      description: "2002-2005 y la trampa favorita: Kirchner no ganó un balotaje.",
      minutes: 35,
      priority: "ALTA",
      source: "Segundo parcial · págs. 17-18",
      reading: [["Crisis y reconstrucción", "Apuntes/2do%20parcial%20ICSE.pdf#page=17"]],
      keys: [
        "Duhalde abandona la convertibilidad, devalúa y pesifica. El comienzo es socialmente muy duro, pero hacia fines de 2002 aparecen señales de recuperación.",
        "La recuperación se apoya en exportaciones, mejora de precios internacionales, tipo de cambio competitivo y políticas de Lavagna.",
        "En 2003 Menem queda primero en la primera vuelta. Renuncia a competir en la segunda porque una mayoría opositora probablemente se uniría contra él.",
        "Kirchner asume sin balotaje y con un porcentaje inicial bajo; construye legitimidad después de llegar al gobierno.",
        "Entre 2003 y 2005 hay crecimiento, empleo, renegociación de deuda, políticas sociales y una relación fuerte con organismos de derechos humanos."
      ],
      trap: "Kirchner no ganó el balotaje: Menem se retiró. Tampoco conviene describir la salida de 2002 como inmediata o sin costos; primero hubo devaluación, inflación, pobreza y conflicto social.",
      recall: ["¿Cómo llegó Kirchner a la presidencia en 2003?", "Menem ganó la primera vuelta, pero se retiró del balotaje; Kirchner asumió sin que se realizara la segunda vuelta."]
    },
    {
      id: "autores",
      title: "Autores cortos del segundo parcial",
      description: "Nueve asociaciones autor-idea para asegurar muchas preguntas de reconocimiento.",
      minutes: 70,
      priority: "CRÍTICA",
      source: "Segundo parcial · págs. 4-16",
      reading: [
        ["Sorteo y liberalismo", "Apuntes/2do%20parcial%20ICSE.pdf#page=4"],
        ["IA y edadismo", "Apuntes/2do%20parcial%20ICSE.pdf#page=8"],
        ["Han y economía", "Apuntes/2do%20parcial%20ICSE.pdf#page=11"],
        ["Venezuela, Cuba y China", "Apuntes/2do%20parcial%20ICSE.pdf#page=12"]
      ],
      keys: [
        "Linares: el sorteo puede complementar elecciones por igualdad y diversidad, pero no reemplazarlas completamente ni elimina por sí solo el clientelismo.",
        "Montero: Nozick defiende Estado mínimo y ve la redistribución forzada como violación de autopropiedad; Rawls acepta desigualdad si beneficia a los peor situados y hay oportunidades justas.",
        "Gulich: la inteligencia es una propiedad material y emergente del sistema nervioso; los modelos de lenguaje no equivalen a inteligencia general.",
        "Bernardini: edadismo por miedo a la muerte, culto a la juventud, valoración económica de la productividad e institucionalización de mayores.",
        "Pimentel/Han: la estética del clic premia inmediatez y viralidad, fragmenta el arte; la esperanza es resistencia activa.",
        "Leiras: la etapa constituyente chavista desplaza a AD y COPEI y transforma radicalmente el sistema venezolano.",
        "Chaguaceda y Viera: Cuba carece de democracia sustantiva; GAESA fusiona poder militar, económico y político.",
        "Povse: China avanza en América Latina por comercio, crédito, inversión, afinidades políticas y vacío relativo estadounidense; nunca por una causa exclusiva.",
        "Pedrosa y Federico: el veto de la ONU refleja el orden posterior a 1945 y hoy tiene un problema de legitimidad y equidad."
      ],
      trap: "En autores cortos, las opciones falsas suelen exagerar: 'reemplaza completamente', 'elimina', 'exclusivamente', 'desapareció'. Recordá la tesis y buscá la formulación matizada.",
      recall: ["Decí en una frase la diferencia entre Nozick y Rawls.", "Nozick limita al máximo la redistribución estatal; Rawls la admite si mejora la situación de los menos aventajados y respeta oportunidades justas."]
    },
    {
      id: "complementos",
      title: "Populismo, federalismo y ciudadanía",
      description: "Prioridad media: conceptos rentables para completar el margen de aprobación.",
      minutes: 35,
      priority: "MEDIA",
      source: "Primer parcial · págs. 14-22",
      reading: [
        ["Sociedad y ciudadanía", "Apuntes/1mer%20parcial%20ICSE.pdf#page=14"],
        ["Populismo", "Apuntes/1mer%20parcial%20ICSE.pdf#page=18"],
        ["Federalismo", "Apuntes/1mer%20parcial%20ICSE.pdf#page=21"]
      ],
      keys: [
        "Ciudadanía: pertenencia política reconocida por un Estado, con derechos y deberes; Arendt la piensa también como el derecho a tener derechos.",
        "Sociedad civil: asociaciones y vínculos entre individuos que no son idénticos al Estado ni al mercado.",
        "Populismo: liderazgo personalista que apela al pueblo frente a una élite y suele tensionar mediaciones institucionales. No todo populismo es automáticamente dictadura.",
        "Federalismo: distribución constitucional del poder entre gobierno nacional y unidades subnacionales con competencias propias.",
        "En América Latina, Argentina, Brasil, México y Venezuela son federaciones."
      ],
      trap: "Federalismo no significa independencia provincial. Hay autonomía y reparto de competencias dentro de un mismo Estado soberano.",
      recall: ["¿Qué diferencia al federalismo de un Estado unitario?", "En el federalismo las unidades subnacionales tienen poderes propios garantizados constitucionalmente; en el unitario dependen más del centro."]
    }
  ];

  const flashcards = [
    ["Estado", "Estructura institucional permanente que ejerce autoridad sobre territorio y población."],
    ["Gobierno", "Personas que conducen temporalmente el Estado."],
    ["Régimen político", "Reglas de acceso y ejercicio del poder."],
    ["Nación", "Comunidad histórica e imaginada con identidad y pertenencia común."],
    ["Poliarquía", "Competencia, participación, libertades y poder efectivo de gobernantes electos."],
    ["Terrorismo de Estado", "Represión ilegal o clandestina ejercida desde el aparato estatal."],
    ["Cordobazo", "Protesta obrera y estudiantil de 1969 que aceleró el desgaste de Onganía."],
    ["Alfonsín y DD. HH.", "CONADEP y Juicio a las Juntas; luego Punto Final y Obediencia Debida bajo presión militar."],
    ["Menem", "Giro neoliberal, privatizaciones, convertibilidad, alineamiento con EE. UU. y reforma de 1994."],
    ["Convertibilidad", "Bajó inflación, pero ató el peso al dólar y rigidizó la política económica."],
    ["Pacto de Olivos", "Acuerdo Menem-Alfonsín que habilitó la reforma constitucional de 1994."],
    ["Círculo vicioso 2000-01", "Ajuste → recesión → menor recaudación → déficit → nuevo ajuste."],
    ["Voto bronca", "Votos blancos y nulos de 2001 como expresión de crisis de representación."],
    ["Kirchner en 2003", "Asume sin balotaje porque Menem se retira tras ganar la primera vuelta."],
    ["Linares", "Sorteo como complemento democrático, no reemplazo total de elecciones."],
    ["Nozick / Rawls", "Estado mínimo y autopropiedad / desigualdad válida si beneficia a los menos aventajados."],
    ["Gulich", "Inteligencia material y emergente; un modelo de lenguaje no es AGI."],
    ["Bernardini", "Edadismo: muerte, culto juvenil, productividad e institucionalización."],
    ["Han", "Crítica a la estética del clic; esperanza como resistencia activa."],
    ["GAESA", "Fusión de poder militar, económico y político en Cuba."],
    ["China en América Latina", "Comercio, inversión, crédito, afinidad política y oportunidad geopolítica."],
    ["Veto ONU", "Herencia de 1945 con problemas actuales de legitimidad y equidad."]
  ];

  const quickQuestions = [
    q("¿Cuál es la relación correcta entre Estado y gobierno?", ["Son sinónimos", "El gobierno es temporal; el Estado tiene mayor permanencia", "El Estado cambia con cada elección", "El gobierno contiene al Estado"], 1, "El gobierno ocupa y conduce temporalmente la estructura estatal."),
    q("Un país celebra elecciones, pero prohíbe oposición real y controla la prensa. ¿Alcanza para llamarlo democracia?", ["Sí, porque hubo voto", "Sí, si ganó la mayoría", "No, faltan competencia y libertades", "No, porque toda elección es autoritaria"], 2, "La democracia exige más que elecciones: competencia, derechos y libertades efectivas."),
    q("¿Qué distingue a la nación del Estado?", ["La nación es una identidad histórica; el Estado es institucional", "La nación siempre tiene fronteras legales", "El Estado es cultural y la nación burocrática", "No existe diferencia"], 0, "Nación remite a identidad y pertenencia; Estado, a instituciones y autoridad territorial."),
    q("¿Qué define mejor al terrorismo de Estado?", ["Cualquier protesta violenta", "Violencia ilegal ejercida desde el aparato estatal", "Un golpe sin apoyo militar", "Una guerra entre países"], 1, "La capacidad represiva estatal se usa ilegal o clandestinamente contra la población."),
    q("¿Qué combinación corresponde a Alfonsín?", ["Indultos y convertibilidad", "CONADEP y Juicio a las Juntas", "Privatizaciones y Pacto de Olivos", "Corralito y megacanje"], 1, "CONADEP y el Juicio a las Juntas son hitos iniciales de su política de derechos humanos."),
    q("¿Qué hizo la convertibilidad desde 1991?", ["Permitió emitir sin límites", "Fijó el peso al dólar y redujo la inflación", "Eliminó la deuda externa", "Nacionalizó empresas"], 1, "Su éxito antiinflacionario convivió con rigidez monetaria y un peso cada vez más caro."),
    q("¿Qué orientación económica tomó Menem?", ["Socialismo nacional", "Modelo peronista clásico sin cambios", "Giro neoliberal con privatizaciones y apertura", "Autarquía económica"], 2, "La identidad peronista convivió con una transformación económica neoliberal."),
    q("¿Qué habilitó políticamente la reforma constitucional de 1994?", ["La reelección presidencial", "La eliminación del Congreso", "El fin del federalismo", "La prohibición del balotaje"], 0, "La reforma permitió la reelección y también incorporó balotaje, jefe de Gabinete y otras instituciones."),
    q("¿Cuál fue el círculo vicioso de la Alianza?", ["Crecimiento, recaudación y superávit", "Ajuste, recesión, menor recaudación y nuevo ajuste", "Devaluación, exportaciones y empleo", "Privatización, inversión y expansión"], 1, "El ajuste profundizaba la recesión y reducía ingresos fiscales, generando presión por ajustar otra vez."),
    q("¿Qué expresó el voto bronca de octubre de 2001?", ["Apoyo a la convertibilidad", "Una crisis general de representación", "La desaparición del peronismo", "La recuperación de la UCR"], 1, "Los votos blancos y nulos manifestaron rechazo al conjunto de la dirigencia."),
    q("¿Cómo llegó Néstor Kirchner a la presidencia?", ["Ganó el balotaje", "Ganó con 42% en primera vuelta", "Menem se retiró antes del balotaje", "Fue designado por Duhalde"], 2, "Menem quedó primero, pero se retiró ante una segunda vuelta que probablemente perdería."),
    q("Para Linares, el sorteo democrático...", ["debe reemplazar por completo las elecciones", "puede complementarlas y aportar diversidad", "elimina automáticamente el clientelismo", "viola siempre la igualdad política"], 1, "Su defensa es complementaria y matizada, no una sustitución completa."),
    q("¿Qué posición corresponde a Nozick?", ["Estado mínimo y crítica a la redistribución", "Redistribución para beneficiar a los peor situados", "Planificación total de la economía", "Igualdad absoluta de resultados"], 0, "Nozick privilegia autopropiedad y un Estado limitado; la segunda opción se acerca a Rawls."),
    q("Para Rawls, una desigualdad puede justificarse cuando...", ["surge del mercado", "beneficia a los menos aventajados y hay oportunidades justas", "el Estado no interviene", "la acepta la mayoría"], 1, "Es el principio de diferencia dentro de un marco de libertades y oportunidades."),
    q("Según Gulich, la inteligencia humana es...", ["mística e inmaterial", "una propiedad material y emergente", "imposible de estudiar", "idéntica a predecir palabras"], 1, "La explicación es sistémica y materialista, sin recurrir a misticismo."),
    q("¿Cuál NO es uno de los cuatro factores del edadismo señalados por Bernardini?", ["Miedo a la muerte", "Culto a la juventud", "Valoración de la productividad", "Uso de redes sociales"], 3, "Los cuatro incluyen además la institucionalización de personas mayores."),
    q("¿Qué critica Han con la 'estética del clic'?", ["La profundidad y contemplación", "La inmediatez, viralidad y fragmentación", "Los museos tradicionales", "La esperanza política"], 1, "La lógica de métricas rápidas vuelve el contenido breve, repetible y descartable."),
    q("¿Qué representa GAESA en el análisis de Cuba?", ["Separación entre Ejército y economía", "Fusión de poder militar, económico y político", "Democratización empresarial", "Autonomía de la sociedad civil"], 1, "El conglomerado muestra circulación de dirigentes y concentración de recursos y poder."),
    q("¿Qué pasó con AD y COPEI en la etapa constituyente chavista?", ["Conservaron su centralidad", "Fueron desplazados a un papel casi testimonial", "Dirigieron la constituyente", "Se fusionaron con el chavismo"], 1, "El nuevo proceso reordenó radicalmente el sistema político previo de Punto Fijo."),
    q("El avance chino en América Latina se explica mejor por...", ["una única afinidad ideológica", "solamente comercio", "comercio, inversión, crédito y oportunidad geopolítica", "la derogación formal de la Doctrina Monroe"], 2, "Povse destaca factores simultáneos; las explicaciones exclusivas son trampas."),
    q("¿Por qué se cuestiona el veto en el Consejo de Seguridad de la ONU?", ["Fue derogado", "Perpetúa un orden de 1945 con problemas de equidad", "Todos los países lo poseen", "Impide toda misión de paz"], 1, "La composición permanente refleja el resultado de la Segunda Guerra Mundial, no la distribución actual de poder y representación."),
    q("¿Cuál afirmación sobre 2001 es más completa?", ["Fue únicamente culpa del FMI", "Fue sólo una crisis bancaria", "Combinó restricciones económicas, decisiones políticas y crisis de representación", "Ocurrió porque se eliminó la convertibilidad demasiado pronto"], 2, "En el examen, las explicaciones monocausales suelen ser incompletas."),
    q("¿Qué distingue al federalismo?", ["Las provincias son países", "El poder se reparte constitucionalmente entre niveles de gobierno", "No existe gobierno nacional", "Todas las decisiones son municipales"], 1, "Las unidades subnacionales tienen competencias propias dentro de un mismo Estado soberano."),
    q("¿Qué opción usa una señal típica de respuesta tramposa?", ["Puede complementar", "Contribuyó junto con otros factores", "Eliminó completamente todo conflicto", "Limitó el margen de acción"], 2, "Palabras absolutas como 'completamente', 'siempre' o 'exclusivamente' suelen exagerar la tesis del autor.")
  ];

  const quickQuestionTopics = [
    "bases", "bases", "bases", "dictaduras", "dictaduras",
    "menem", "menem", "menem", "alianza", "alianza", "salida",
    "autores", "autores", "autores", "autores", "autores", "autores",
    "autores", "autores", "autores", "autores", "alianza", "complementos", "bases"
  ];
  quickQuestions.forEach((question, index) => { question.lessonId = quickQuestionTopics[index]; });

  function inferLessonId(question) {
    const text = `${question.prompt} ${question.options?.map(option => option.text).join(" ") || ""}`
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    if (/linares|sorteo|nozick|rawls|julio montero|gulich|inteligencia artificial|chatgpt|bernardini|edadismo|pimentel|byung|han\b|harari|leiras|venezuela|chavez|chavismo|chaguaceda|eloy viera|cuba|gaesa|china|consejo de seguridad|naciones unidas|poder de veto|pedrosa y antonio federico/.test(text)) return "autores";
    if (/duhalde|pesificacion|lavagna|nestor kirchner|balotaje de 2003|segunda vuelta electoral de 2003|2002|2003|2004|2005/.test(text)) return "salida";
    if (/de la rua|la alianza|gobierno de la alianza|corralito|blindaje|megacanje|deficit cero|voto bronca|lopez murphy|diciembre de 2001|octubre de 2001|crisis de 2001/.test(text)) return "alianza";
    if (/menem|cavallo|convertibilidad|consenso de washington|privatiz|pacto de olivos|reforma constitucional de 1994|efecto tequila|duhalde.*1999|reeleccion.*1999/.test(text)) return "menem";
    if (/petrino|populismo|populista|pirsch|federalismo|federal|sociedad civil|touraine|comunidad/.test(text)) return "complementos";
    if (/ongania|cordobazo|montoneros|triple a|rodrigazo|proceso de reorganizacion|dictadura|golpe de estado|terrorismo|genocidio|alfonsin|conadep|juntas|carapintada|obediencia debida|punto final|grinspun|plan austral|malvinas|1973|1974|1975|1976|1977|1978|1979|1980|1981|1982|1983|1984|1985|1986|1987|1988|1989/.test(text)) return "dictaduras";
    return "bases";
  }

  EXAMS.forEach(exam => exam.questions.forEach(question => {
    question.lessonId = inferLessonId(question);
  }));

  function q(prompt, options, answer, explanation) { return { prompt, options: options.map((text, i) => ({ letter: String.fromCharCode(65 + i), text })), answer: String.fromCharCode(65 + answer), explanation, points: 1 }; }

  const defaults = { completedLessons: [], routeDone: [], quickAttempts: [], examResults: {}, mistakes: {}, knownCards: [], theme: "light" };
  let state = loadState();
  let currentView = "inicio";
  let flashIndex = 0;
  let quizSession = null;
  let timerId = null;

  const content = document.getElementById("content");
  const dialog = document.getElementById("course-dialog");
  const dialogContent = document.getElementById("dialog-content");

  function loadState() {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
    catch { return { ...defaults }; }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateProgress();
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function updateProgress() {
    const lessonPart = state.completedLessons.length / lessons.length * 55;
    const practicePart = Math.min(state.quickAttempts.length, 3) / 3 * 15;
    const examPart = Math.min(Object.keys(state.examResults).length, 3) / 3 * 25;
    const cardPart = state.knownCards.length / flashcards.length * 5;
    const progress = Math.round(Math.min(100, lessonPart + practicePart + examPart + cardPart));
    document.getElementById("side-progress").style.width = `${progress}%`;
    document.getElementById("side-progress-label").textContent = `${progress}% del recorrido`;
  }

  function setView(view) {
    currentView = view;
    quizSession = null;
    stopTimer();
    document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    const titles = { inicio: "Inicio", ruta: "Ruta de 3 días", lecciones: "Lo infaltable", fichas: "Fichas rápidas", practica: "Práctica guiada", parciales: "Parciales reales", errores: "Mis errores" };
    document.getElementById("view-title").textContent = titles[view] || "Curso";
    document.getElementById("view-eyebrow").textContent = view === "parciales" ? "FORMATO REAL" : "CURSO INTENSIVO";
    closeMobileMenu();
    render();
    content.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function render() {
    const views = { inicio: renderHome, ruta: renderRoute, lecciones: renderLessons, fichas: renderFlashcards, practica: renderPractice, parciales: renderExams, errores: renderMistakes };
    content.innerHTML = (views[currentView] || renderHome)();
    updateProgress();
  }

  function pageHead(eyebrow, title, text, action = "") {
    return `<div class="page-head"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${text}</p></div>${action}</div>`;
  }

  function renderHome() {
    const results = Object.values(state.examResults);
    const best = results.length ? Math.max(...results.map(item => item.grade)) : null;
    const completed = state.completedLessons.length;
    const examReady = ["menem", "alianza", "salida", "autores"].every(id => state.completedLessons.includes(id));
    const tasks = [
      ["lesson-menem", "Dominar Menem 1989-1999", "Leer, cerrar y explicar", "55 min", state.completedLessons.includes("menem"), false],
      ["lesson-alianza", "Reconstruir la crisis de 2001", "Memorizar la cadena causal", "60 min", state.completedLessons.includes("alianza"), false],
      ["lesson-salida", "Entender Duhalde y la llegada de Kirchner", "Salida de la crisis y balotaje de 2003", "35 min", state.completedLessons.includes("salida"), false],
      ["lesson-autores", "Aprender los autores cortos", "ONU, Cuba, IA, liberalismo y más", "70 min", state.completedLessons.includes("autores"), false],
      ["exam-p2-t1", "Rendir 2.º parcial · Tema 1", "Se habilita al completar los cuatro módulos", "35-60 min", Boolean(state.examResults["p2-t1"]), !examReady]
    ];
    return `${pageHead("TABLERO", "Tu misión: asegurar el 4", "Tenés poco tiempo, así que el recorrido prioriza reconocimiento de tesis, procesos repetidos y práctica con el formato exacto del examen.", '<button class="button red" data-view="ruta">Ver qué hago hoy</button>')}
      <section class="dashboard-grid">
        <div class="focus-panel"><div><span class="eyebrow">PRÓXIMO PASO RECOMENDADO</span><h2>${completed < 2 ? "Reconstruí Menem y la crisis de 2001 antes de abrir otro tema." : "Ya tenés base: probala con preguntas, no con relectura."}</h2><p>${completed < 2 ? "Son los contenidos más repetidos del segundo parcial, el área donde tenés menos margen." : "Un error corregido ahora vale más que otra página subrayada."}</p></div><div class="focus-actions"><button class="button red" data-lesson="${completed < 2 ? "menem" : "autores"}">Empezar bloque</button><button class="button secondary" data-view="practica">Practicar 10 preguntas</button></div></div>
        <div class="metric"><small>Lecciones listas</small><strong>${completed}<span style="font-size:18px;color:var(--muted)"> / ${lessons.length}</span></strong><em>Cuatro lecciones críticas concentran la mayor rentabilidad.</em></div>
        <div class="metric"><small>Mejor simulacro</small><strong class="${best >= 4 ? "score-good" : ""}">${best === null ? "—" : best.toFixed(1)}</strong><em>${best === null ? "Todavía no rendiste uno." : best >= 4 ? "Ya cruzaste la línea. Busquemos margen." : "Revisá errores y volvé a intentar."}</em></div>
      </section>
      <div class="section-title"><h2>Bloque de hoy</h2><span>Ordenado por impacto</span></div>
      <div class="today-list">${tasks.map(([id, name, detail, time, done, locked], index) => `<div class="today-row ${done ? "done" : ""}"><button class="check" ${locked ? "disabled" : `data-home-task="${id}"`} aria-label="Abrir tarea">${done ? "✓" : locked ? "·" : index + 1}</button><div><div class="task-name">${name}</div><div class="task-detail">${detail}</div></div><span class="task-time">${time}</span><button class="button small secondary" ${locked ? "disabled" : `data-home-task="${id}"`}>${locked ? "Falta material" : done ? "Repasar" : "Abrir"}</button></div>`).join("")}</div>
      <div class="section-title"><h2>Regla de estudio</h2><span>Repetir en cada bloque</span></div>
      <div class="result-breakdown"><div><strong>1</strong><span>LEÉ LA FICHA</span></div><div><strong>2</strong><span>CERRÁ Y EXPLICÁ EN VOZ ALTA</span></div><div><strong>3</strong><span>RESPONDÉ Y CORREGÍ</span></div></div>`;
  }

  function renderRoute() {
    const days = [
      ["Día 1", "Reconstruir y atacar lo más probable", [["d1a", "90'", "Menem + línea de tiempo", "Lección crítica", "menem"], ["d1b", "75'", "Estado, régimen, democracia y nación", "Cuadro comparativo", "bases"], ["d1c", "45'", "Práctica guiada", "Sólo sobre módulos ya estudiados", "quick"]]],
      ["Día 2", "Completar el segundo parcial y recién después simular", [["d2a", "60'", "Crisis de 2001", "Cadena causal completa", "alianza"], ["d2b", "35'", "Duhalde y Kirchner", "Salida de la crisis", "salida"], ["d2c", "70'", "Autores cortos", "ONU, Cuba, IA, liberalismo y más", "autores"], ["d2d", "60'", "2.º parcial · Tema 1", "Primer simulacro completo", "exam-p2-t1"], ["d2e", "30'", "Repaso de errores", "Sólo lo que fallaste", "mistakes"]]],
      ["Día 3", "Consolidar y llegar fresco", [["d3a", "75'", "Base del primer parcial", "Estado + dictadura + DD. HH.", "dictaduras"], ["d3b", "60'", "Un simulacro mixto", "Elegí un tema no hecho", "exams"], ["d3c", "30'", "Fichas rápidas", "Repasar asociaciones", "cards"], ["d3d", "20'", "Lista final de errores", "Sin sumar teoría nueva", "mistakes"]]]
    ];
    return `${pageHead("PLAN DE EMERGENCIA", "Tres días, una ruta", "No necesitás completar todo para aprobar. Respetá el orden: los bloques críticos van primero y la práctica aparece todos los días.")}
      <div class="timeline">${days.map(([day, subtitle, tasks]) => `<section class="day-block"><div class="day-label"><strong>${day}</strong><span>${subtitle}</span></div>${tasks.map(([id, time, title, detail, action]) => `<div class="route-task"><span>${time}</span><div><strong>${title}</strong><small>${detail}</small></div><button class="button small ${state.routeDone.includes(id) ? "secondary" : ""}" data-route-action="${action}" data-route-id="${id}">${state.routeDone.includes(id) ? "Hecho ✓" : "Empezar"}</button></div>`).join("")}</section>`).join("")}</div>`;
  }

  function renderLessons() {
    return `${pageHead("NÚCLEO DEL CURSO", "Lo infaltable para aprobar", "Cada lección termina con una pregunta de recuperación. Marcala como lista sólo cuando puedas contestarla sin mirar.")}
      <div class="lesson-grid">${lessons.map((lesson, index) => `<article class="lesson-card ${["menem", "alianza", "autores"].includes(lesson.id) ? "priority" : ""} ${state.completedLessons.includes(lesson.id) ? "completed" : ""}"><div class="lesson-number"><span>MÓDULO ${String(index + 1).padStart(2, "0")}</span><span>${lesson.minutes} MIN</span></div><h3>${lesson.title}</h3><p>${lesson.description}</p><footer><span class="tag ${lesson.priority === "CRÍTICA" ? "red" : lesson.priority === "ALTA" ? "teal" : "gold"}">${lesson.priority}</span><button class="button small secondary" data-lesson="${lesson.id}">${state.completedLessons.includes(lesson.id) ? "Repasar" : "Abrir"}</button></footer></article>`).join("")}</div>`;
  }

  function openLesson(id) {
    const lesson = lessons.find(item => item.id === id);
    if (!lesson) return;
    if (quizSession?.type === "exam" && !quizSession.pausedAt) {
      quizSession.pausedAt = Date.now();
      stopTimer();
    }
    dialogContent.innerHTML = `<article class="lesson-detail"><span class="eyebrow">${lesson.priority} · ${lesson.minutes} MIN · ${lesson.source}</span><h1>${lesson.title}</h1><p class="lead">${lesson.description}</p><h3>Lo que tenés que poder reconocer</h3><ul class="key-list">${lesson.keys.map(item => `<li>${item}</li>`).join("")}</ul><div class="trap-box"><strong>Trampa típica</strong>${lesson.trap}</div><h3>Lectura dirigida</h3><div class="reading-links">${lesson.reading.map(([label, href]) => `<a class="button small secondary" href="${href}" target="_blank">${label} ↗</a>`).join("")}</div><div class="recall-box"><strong>Sin mirar: ${lesson.recall[0]}</strong><button class="button small secondary" data-reveal-answer>Mostrar respuesta</button><div class="answer-reveal">${lesson.recall[1]}</div></div><button class="button red" data-complete-lesson="${lesson.id}">${state.completedLessons.includes(lesson.id) ? "Marcar para repasar" : "La puedo explicar: marcar lista"}</button></article>`;
    dialog.showModal();
  }

  function renderFlashcards() {
    const card = flashcards[flashIndex];
    const known = state.knownCards.includes(flashIndex);
    return `${pageHead("REPASO ACTIVO", "Fichas rápidas", "Intentá decir la respuesta antes de dar vuelta la ficha. Las que marques como difíciles vuelven a aparecer en tu próximo recorrido.")}
      <div class="flash-layout"><div><div class="flashcard" data-flip-card><span class="flash-label">FICHA ${flashIndex + 1} / ${flashcards.length}</span><h2>${card[0]}</h2><div class="flash-answer">${card[1]}</div><footer>Hacé clic para ver la respuesta</footer></div><div class="flash-controls"><button class="button secondary" data-card-prev>← Anterior</button><button class="button ${known ? "secondary" : "red"}" data-card-know>${known ? "Ya la sé ✓" : "La sé"}</button><button class="button secondary" data-card-next>Siguiente →</button></div></div><aside><span class="eyebrow">ESTADO DEL MAZO</span><div class="flash-stats"><div><span>Dominadas</span><strong>${state.knownCards.length}</strong></div><div><span>Pendientes</span><strong>${flashcards.length - state.knownCards.length}</strong></div><div><span>Avance</span><strong>${Math.round(state.knownCards.length / flashcards.length * 100)}%</strong></div></div><p style="color:var(--muted);font-size:13px;line-height:1.55;margin-top:18px">Meta útil: dominar al menos 15 antes del último simulacro.</p></aside></div>`;
  }

  function renderPractice() {
    if (quizSession?.type === "quick") return renderQuiz();
    const available = quickQuestions.filter(question => state.completedLessons.includes(question.lessonId));
    const modules = lessons.filter(lesson => state.completedLessons.includes(lesson.id)).map(lesson => lesson.title);
    return `${pageHead("APRENDER RESPONDIENDO", "Práctica guiada", "Acá sí ves la explicación después de cada respuesta. Usala para aprender la lógica; los parciales reales reservan la corrección hasta el final.")}
      <div class="practice-start"><article class="mode-card"><span class="tag red">RECOMENDADO</span><h3>Practicar lo que ya estudiaste</h3><p>${available.length ? `${available.length} preguntas disponibles de: ${modules.join(", ")}. No aparecerá contenido de módulos pendientes.` : "Todavía no marcaste ninguna lección como aprendida. Completá al menos una para habilitar sus preguntas."}</p>${available.length ? `<button class="button red" data-start-quick="studied:10">Empezar ${Math.min(10, available.length)}</button>` : `<button class="button red" data-view="lecciones">Ir al material</button>`}</article><article class="mode-card"><span class="tag teal">DIAGNÓSTICO COMPLETO</span><h3>Banco de 24 preguntas</h3><p>Incluye todo el curso, también módulos que quizá todavía no viste. Cada consigna indica de qué lección sale y permite abrirla.</p><button class="button secondary" data-start-quick="all:24">Empezar banco completo</button></article></div>`;
  }

  function startQuick(count, scope = "studied") {
    const pool = scope === "all" ? quickQuestions : quickQuestions.filter(question => state.completedLessons.includes(question.lessonId));
    if (!pool.length) {
      setView("lecciones");
      toast("Primero completá una lección para habilitar sus preguntas");
      return;
    }
    const shuffled = [...pool].sort(() => Math.random() - .5).slice(0, Math.min(count, pool.length));
    quizSession = { type: "quick", scope, title: "Práctica guiada", questions: shuffled, index: 0, answers: {}, revealed: {} };
    render();
  }

  function renderQuiz() {
    const session = quizSession;
    const question = session.questions[session.index];
    const selected = session.answers[session.index];
    const revealed = session.type === "quick" && session.revealed[session.index];
    const progress = (session.index + 1) / session.questions.length * 100;
    const answered = Object.keys(session.answers).length;
    const module = lessons.find(lesson => lesson.id === question.lessonId);
    const source = question.number ? `Consigna ${question.number} · ${question.points} ${question.points === 1 ? "punto" : "puntos"}` : `Concepto esencial · ${module?.title || "Repaso"}`;
    return `<div class="quiz-shell">${session.type === "exam" ? `<div class="exam-identity"><span>SIMULACRO REAL</span><strong>${esc(session.title)}</strong></div>` : ""}<div class="quiz-top"><div class="quiz-progress"><i style="width:${progress}%"></i></div><div class="quiz-meta">${session.type === "exam" ? `<strong id="quiz-timer">${formatTime(remainingSeconds())}</strong> · ` : ""}${session.index + 1} / ${session.questions.length}</div></div><div class="question-panel"><div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><span class="question-points">${source}</span>${module ? `<button class="button small secondary" data-lesson="${module.id}">${session.type === "exam" ? "Ir al material" : "Repasar material"}</button>` : ""}</div><h2>${esc(question.prompt)}</h2><div class="options">${question.options.map(option => { const isCorrect = revealed && option.letter === question.answer; const isWrong = revealed && option.letter === selected && selected !== question.answer; return `<button class="option ${selected === option.letter ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" data-answer="${option.letter}" ${revealed ? "disabled" : ""}><b>${option.letter}</b><span>${esc(option.text)}</span></button>`; }).join("")}</div>${revealed ? `<div class="feedback ${selected === question.answer ? "" : "wrong"}"><strong>${selected === question.answer ? "Correcto." : `La correcta era ${question.answer}.`}</strong> ${esc(question.explanation || "Esta es la respuesta indicada por la clave oficial del parcial.")}</div>` : ""}</div>${session.type === "exam" ? `<div class="question-dots">${session.questions.map((_, i) => `<button class="${session.answers[i] ? "answered" : ""} ${i === session.index ? "current" : ""}" data-quiz-jump="${i}">${i + 1}</button>`).join("")}</div>` : ""}<div class="quiz-nav"><button class="button secondary" data-quiz-prev ${session.index === 0 ? "disabled" : ""}>← Anterior</button>${session.type === "exam" && session.index === session.questions.length - 1 ? `<button class="button red" data-submit-exam ${answered < session.questions.length ? "" : ""}>Corregir parcial</button>` : `<button class="button red" data-quiz-next ${!selected || (session.type === "quick" && !revealed) ? "disabled" : ""}>${session.index === session.questions.length - 1 ? "Ver resultado" : "Siguiente →"}</button>`}</div>${session.type === "exam" ? `<p style="text-align:center;color:var(--muted);font-size:11px">Respondidas: ${answered} de ${session.questions.length}. Podés moverte y cambiar respuestas antes de corregir.</p>` : ""}</div>`;
  }

  function answerQuestion(letter) {
    if (!quizSession) return;
    quizSession.answers[quizSession.index] = letter;
    if (quizSession.type === "quick") quizSession.revealed[quizSession.index] = true;
    render();
  }

  function nextQuestion() {
    if (quizSession.index < quizSession.questions.length - 1) { quizSession.index++; render(); return; }
    if (quizSession.type === "quick") finishQuick();
  }

  function finishQuick() {
    const scope = quizSession.scope || "studied";
    const correct = quizSession.questions.filter((question, index) => quizSession.answers[index] === question.answer).length;
    state.quickAttempts.push({ date: Date.now(), correct, total: quizSession.questions.length });
    saveState();
    const total = quizSession.questions.length;
    quizSession = null;
    const percentage = Math.round(correct / total * 100);
    content.innerHTML = `<div class="quiz-shell"><div class="result-header"><div class="grade-circle ${correct / total >= .6 ? "pass" : ""}" style="--score:${percentage}%"><div><strong>${percentage}%</strong><span>${correct}/${total} correctas</span></div></div><div><span class="eyebrow">PRÁCTICA TERMINADA</span><h1>${correct / total >= .7 ? "Bien. Ya reconocés el núcleo." : "Ahora sabés exactamente qué reforzar."}</h1><p>En práctica guiada buscá al menos 7/10 antes de pasar a un simulacro real.</p></div></div><div class="focus-actions" style="margin-top:22px"><button class="button red" data-start-quick="${scope}:10">Otra tanda</button><button class="button secondary" data-view="parciales">Ir a parciales reales</button></div></div>`;
  }

  function renderExams(filter = "all") {
    if (quizSession?.type === "exam") return renderQuiz();
    const filtered = filter === "all" ? EXAMS : EXAMS.filter(exam => exam.partial === Number(filter));
    return `${pageHead("16 TEMAS OFICIALES", "Parciales reales", "Hacelos sin abrir el PDF: la página oculta la clave, calcula la nota real y manda cada error a tu lista de repaso.")}
      <div class="exam-toolbar"><label for="exam-filter" class="eyebrow" style="margin:0">MOSTRAR</label><select id="exam-filter"><option value="all" ${filter === "all" ? "selected" : ""}>Todos</option><option value="1" ${filter === "1" ? "selected" : ""}>Primer parcial</option><option value="2" ${filter === "2" ? "selected" : ""}>Segundo parcial</option></select><span style="color:var(--muted);font-size:12px">18 consignas · 10 puntos · aprobación desde 4</span></div>
      <div class="exam-grid">${filtered.map(exam => { const result = state.examResults[exam.id]; return `<article class="exam-card"><div><span class="tag ${exam.partial === 2 ? "red" : "teal"}">${exam.partial}.º PARCIAL</span><h3>Tema ${exam.theme}</h3><p>18 consignas · hasta 90 minutos</p></div><footer>${result ? `<span class="exam-result ${result.grade >= 4 ? "score-good" : ""}">${result.grade.toFixed(1)}/10</span>` : `<span class="tag">NUEVO</span>`}<button class="button small ${exam.partial === 2 && !result ? "red" : "secondary"}" data-start-exam="${exam.id}">${result ? "Reintentar" : "Rendir"}</button></footer></article>`; }).join("")}</div>`;
  }

  function startExam(id) {
    const exam = EXAMS.find(item => item.id === id);
    if (!exam) return;
    quizSession = { type: "exam", title: `${exam.partial}.º parcial · Tema ${exam.theme}`, examId: exam.id, questions: exam.questions, index: 0, answers: {}, startedAt: Date.now(), duration: 90 * 60 };
    currentView = "parciales";
    render();
    startTimer();
  }

  function remainingSeconds() {
    if (!quizSession || quizSession.type !== "exam") return 0;
    return Math.max(0, quizSession.duration - Math.floor((Date.now() - quizSession.startedAt) / 1000));
  }

  function formatTime(seconds) { const min = Math.floor(seconds / 60); const sec = seconds % 60; return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`; }
  function startTimer() { stopTimer(); timerId = setInterval(() => { const node = document.getElementById("quiz-timer"); if (node) node.textContent = formatTime(remainingSeconds()); if (remainingSeconds() <= 0) submitExam(); }, 1000); }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

  function submitExam() {
    if (!quizSession || quizSession.type !== "exam") return;
    stopTimer();
    const unanswered = quizSession.questions.length - Object.keys(quizSession.answers).length;
    if (unanswered && remainingSeconds() > 0 && !window.confirm(`Te faltan ${unanswered} consignas. ¿Corregir igual?`)) return;
    let grade = 0;
    let correct = 0;
    quizSession.questions.forEach((question, index) => {
      const selected = quizSession.answers[index];
      if (selected === question.answer) { grade += question.points; correct++; delete state.mistakes[`${quizSession.examId}-${question.number}`]; }
      else {
        state.mistakes[`${quizSession.examId}-${question.number}`] = { examId: quizSession.examId, examTitle: quizSession.title, number: question.number, prompt: question.prompt, answer: question.answer, selected: selected || "Sin responder", options: question.options, date: Date.now() };
      }
    });
    grade = Math.round(grade * 10) / 10;
    state.examResults[quizSession.examId] = { grade, correct, date: Date.now() };
    const examId = quizSession.examId;
    const wrong = quizSession.questions.length - correct;
    saveState();
    quizSession = null;
    const gradePercentage = Math.round(grade * 10);
    content.innerHTML = `<div class="quiz-shell"><div class="result-header"><div class="grade-circle ${grade >= 4 ? "pass" : ""}" style="--score:${gradePercentage}%"><div><strong>${gradePercentage}%</strong><span>${grade.toFixed(1)}/10</span></div></div><div><span class="eyebrow">${esc(examId.toUpperCase())} · RESULTADO</span><h1>${grade >= 4 ? "Aprobado. Ahora construí margen." : "Todavía no, pero ya apareció el mapa."}</h1><p>${grade >= 4 ? "El objetivo mínimo está. Repasá los errores para que una variación de tema no te saque puntos." : "No releas todo: andá directo a las consignas falladas y a la lección asociada."}</p></div></div><div class="result-breakdown"><div><strong>${correct}</strong><span>CORRECTAS</span></div><div><strong>${wrong}</strong><span>PARA REPASAR</span></div><div><strong>${grade >= 4 ? "SÍ" : "NO"}</strong><span>APRUEBA</span></div></div><div class="focus-actions"><button class="button red" data-view="errores">Revisar errores</button><button class="button secondary" data-restart-exam="${examId}">Reintentar</button><button class="button secondary" data-view="parciales">Volver a temas</button></div></div>`;
  }

  function renderMistakes() {
    const mistakes = Object.entries(state.mistakes).sort((a, b) => b[1].date - a[1].date);
    return `${pageHead("CUADERNO AUTOMÁTICO", "Mis errores", "Cada fallo de un parcial real queda acá. Leé la respuesta correcta, explicá por qué y recién entonces marcá la consigna como aprendida.", mistakes.length ? '<button class="button secondary" data-clear-mistakes>Vaciar lista</button>' : "")}${mistakes.length ? `<div class="mistake-list">${mistakes.map(([key, item]) => { const correct = item.options.find(option => option.letter === item.answer); return `<article class="mistake-row"><header><span>${esc(item.examTitle)} · Consigna ${item.number}</span><button class="button small secondary" data-resolve-mistake="${key}">Ya la entendí</button></header><p>${esc(item.prompt)}</p><div class="mistake-answer"><strong>Correcta: ${item.answer}.</strong> ${esc(correct?.text || "")}</div><small style="display:block;margin-top:6px;color:var(--muted)">Tu respuesta: ${esc(item.selected)}</small></article>`; }).join("")}</div>` : `<div class="empty-state"><div><strong>Todavía no hay errores guardados.</strong>Rendí un parcial real y la página va a armar este repaso por vos.<br><button class="button red" data-view="parciales" style="margin-top:18px">Elegir parcial</button></div></div>`}`;
  }

  function routeAction(action, id) {
    if (!state.routeDone.includes(id)) state.routeDone.push(id); else state.routeDone = state.routeDone.filter(item => item !== id);
    saveState();
    if (["menem", "bases", "alianza", "autores", "dictaduras"].includes(action)) openLesson(action);
    else if (action === "quick") { currentView = "practica"; startQuick(10); }
    else if (action.startsWith("exam-")) startExam(action.replace("exam-", ""));
    else if (action === "exams") setView("parciales");
    else if (action === "mistakes") setView("errores");
    else if (action === "cards") setView("fichas");
  }

  function toast(message) {
    const node = document.getElementById("toast");
    node.textContent = message;
    node.classList.add("show");
    setTimeout(() => node.classList.remove("show"), 2200);
  }

  function closeMobileMenu() { document.getElementById("sidebar").classList.remove("open"); document.getElementById("mobile-overlay").classList.remove("open"); }

  document.addEventListener("click", event => {
    const target = event.target.closest("button, [data-view], [data-lesson]");
    if (!target) return;
    if (target.dataset.view) return setView(target.dataset.view);
    if (target.dataset.lesson) return openLesson(target.dataset.lesson);
    if (target.dataset.closeDialog !== undefined) return dialog.close();
    if (target.dataset.revealAnswer !== undefined) { target.nextElementSibling.classList.add("open"); target.remove(); return; }
    if (target.dataset.completeLesson) {
      const id = target.dataset.completeLesson;
      if (state.completedLessons.includes(id)) state.completedLessons = state.completedLessons.filter(item => item !== id); else state.completedLessons.push(id);
      saveState(); dialog.close(); render(); toast("Progreso actualizado"); return;
    }
    if (target.dataset.homeTask) {
      const action = target.dataset.homeTask;
      if (action.startsWith("lesson-")) return openLesson(action.replace("lesson-", ""));
      if (action === "quick") { currentView = "practica"; startQuick(10); return; }
      if (action.startsWith("exam-")) return startExam(action.replace("exam-", ""));
    }
    if (target.dataset.routeAction) return routeAction(target.dataset.routeAction, target.dataset.routeId);
    if (target.dataset.flipCard !== undefined) return target.classList.toggle("revealed");
    if (target.dataset.cardPrev !== undefined) { flashIndex = (flashIndex - 1 + flashcards.length) % flashcards.length; return render(); }
    if (target.dataset.cardNext !== undefined) { flashIndex = (flashIndex + 1) % flashcards.length; return render(); }
    if (target.dataset.cardKnow !== undefined) { if (state.knownCards.includes(flashIndex)) state.knownCards = state.knownCards.filter(i => i !== flashIndex); else state.knownCards.push(flashIndex); saveState(); flashIndex = (flashIndex + 1) % flashcards.length; return render(); }
    if (target.dataset.startQuick) {
      const [scope, count] = target.dataset.startQuick.includes(":") ? target.dataset.startQuick.split(":") : ["studied", target.dataset.startQuick];
      return startQuick(Number(count), scope);
    }
    if (target.dataset.answer) return answerQuestion(target.dataset.answer);
    if (target.dataset.quizPrev !== undefined && quizSession.index > 0) { quizSession.index--; return render(); }
    if (target.dataset.quizNext !== undefined) return nextQuestion();
    if (target.dataset.quizJump !== undefined) { quizSession.index = Number(target.dataset.quizJump); return render(); }
    if (target.dataset.startExam) return startExam(target.dataset.startExam);
    if (target.dataset.submitExam !== undefined) return submitExam();
    if (target.dataset.restartExam) return startExam(target.dataset.restartExam);
    if (target.dataset.resolveMistake) { delete state.mistakes[target.dataset.resolveMistake]; saveState(); render(); toast("Error marcado como aprendido"); return; }
    if (target.dataset.clearMistakes !== undefined && window.confirm("¿Vaciar toda la lista de errores?")) { state.mistakes = {}; saveState(); render(); return; }
    if (target.dataset.resetProgress !== undefined && window.confirm("¿Borrar todo tu progreso, resultados, errores y fichas aprendidas? Esta acción no se puede deshacer.")) {
      const theme = state.theme;
      state = { ...defaults, theme };
      localStorage.removeItem(STORAGE_KEY);
      saveState();
      setView("inicio");
      toast("Tu progreso fue borrado");
      return;
    }
  });

  document.getElementById("menu-button").addEventListener("click", () => { document.getElementById("sidebar").classList.add("open"); document.getElementById("mobile-overlay").classList.add("open"); });
  document.getElementById("mobile-overlay").addEventListener("click", closeMobileMenu);
  document.getElementById("theme-button").addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = state.theme; saveState(); });
  content.addEventListener("change", event => { if (event.target.id === "exam-filter") content.innerHTML = renderExams(event.target.value); });
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => {
    if (quizSession?.type === "exam" && quizSession.pausedAt) {
      quizSession.startedAt += Date.now() - quizSession.pausedAt;
      delete quizSession.pausedAt;
      render();
      startTimer();
    }
  });

  document.documentElement.dataset.theme = state.theme;
  render();
})();
