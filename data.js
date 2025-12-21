const semesters = {
    1: [
        { code: "EIQ110", name: "Fundamentos de Procesos Químicos", prereq: [] },
        { code: "FIN100", name: "Desarrollo Integral y Comunicación Para Ingeniería", prereq: [] },
        { code: "MAT1001", name: "Fundamentos de Matematicas para Ingenieria", prereq: [] },
        { code: "QUI100", name: "Introducción a la Química", prereq: [] }
    ],
    2: [
        { code: "EIQ120", name: "Fundamentos de Ingeniería", prereq: [] },
        { code: "MAT1002", name: "Cálculo Diferencial e Integral", prereq: ["MAT1001"] },
        { code: "QUI161", name: "Química Inorgánica", prereq: ["QUI100"] }
    ],
    3: [
        { code: "EIQ220", name: "Balance de Materia", prereq: ["EIQ120"] },
        { code: "FIS1002", name: "Física para Ingeniería", prereq: ["MAT1002"] },
        { code: "ICA213", name: "Economía", prereq: ["MAT1001"] },
        { code: "ING9001", name: "Inglés 1", prereq: [] },
        { code: "MAT1003", name: "Cálculo en Varias Variables", prereq: ["MAT1002"] }
    ],
    4: [
        { code: "EIQ242", name: "Elementos de Fisicoquímica", prereq: ["EIQ120"] },
        { code: "EIQ263", name: "Química Orgánica Industrial", prereq: ["QUI100"] },
        { code: "EIQ288", name: "Métodos Estadísticos en Ingeniería", prereq: ["MAT1003"] },
        { code: "ING9002", name: "Inglés 2", prereq: ["ING9001"] },
        { code: "MAT1005", name: "Ecuaciones Diferenciales", prereq: ["MAT1003"] }
    ],
    5: [
        { code: "EIQ262", name: "Ciencia de Materiales", prereq: ["QUI161"] },
        { code: "EIQ311", name: "Termodinámica de Procesos", prereq: ["EIQ242"] },
        { code: "EIQ312", name: "Administración de la Producción", prereq: ["ICA213"] },
        { code: "EIQ314", name: "Interpretación de Planos", prereq: ["EIQ220"] },
        { code: "ING9003", name: "Inglés 3", prereq: ["ING9002"] }
    ],
    6: [
        { code: "EIQ356", name: "Mecánica de Fluidos", prereq: ["FIS1002"] },
        { code: "EIQ359", name: "Termodinámica del Equilibrio", prereq: ["EIQ311"] },
        { code: "EIQ366", name: "Métodos Numéricos", prereq: ["MAT1005"] },
        { code: "EIQ377", name: "Sistemas Eléctricos de Procesos", prereq: ["FIS1002"] },
        { code: "ING9004", name: "Inglés 4", prereq: ["ING9003"] }
    ],
    7: [
        { code: "EIQ415", name: "Lab. Química Aplicada", prereq: ["EIQ263"] },
        { code: "EIQ416", name: "Prevención de Riesgos Industriales", prereq: ["EIQ312"] },
        { code: "EIQ432", name: "Cálculo de Procesos Químicos", prereq: ["EIQ311"] },
        { code: "EIQ453", name: "Transferencia de Calor", prereq: ["EIQ356"] }
    ],
    8: [
        { code: "EIQ451", name: "Transferencia de Masa", prereq: ["EIQ359"] },
        { code: "EIQ474", name: "Reactores Químicos 1", prereq: ["EIQ359"] },
        { code: "EIQ476", name: "Ingeniería Económica", prereq: ["EIQ312"] },
        { code: "EIQ492", name: "Electroquímica", prereq: ["EIQ359"] }
    ],
    9: [
        { code: "EIQ500", name: "Simulación de Procesos", prereq: ["EIQ366"] },
        { code: "EIQ514", name: "Procesos de Separación", prereq: ["EIQ451"] },
        { code: "EIQ518", name: "Diseño de Equipos", prereq: ["EIQ262"] },
        { code: "EIQ526", name: "Ingeniería Ambiental", prereq: ["EIQ416"] },
        { code: "EIQ536", name: "Reactores Químicos 2", prereq: ["EIQ474"] }
    ],
    10: [
        { code: "EIQ553", name: "Control de Procesos Químicos", prereq: ["EIQ432"] },
        { code: "EIQ577", name: "Diseño de Plantas", prereq: ["EIQ476"] },
        { code: "EIQ582", name: "Proyecto de Título 1", prereq: [] },
        { code: "EIQ597", name: "Lab. Operaciones Unitarias", prereq: ["EIQ451"] }
    ],
    11: [
        { code: "EIQ625", name: "Proyecto de Título 2", prereq: ["EIQ582"] }
    ]
};
