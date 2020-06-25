const noteModel = {
    notes: [
        {// how the model of the notes would look.
            ID: 1,
            content: "Social",
            aboutColor: "red",
            group: 'red 1',
            redAgree: 3,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 1, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 2,
            content: "Forstående",
            aboutColor: "red",
            group: 'red 1',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 5,
            disagree: 0, //['Knut'],
            posX: 150, //x
            posY: 250, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 3,
            content: "Lyttende",
            aboutColor: "red",
            group: 'red 1',
            redAgree: 1,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 100, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 4,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'red 1',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 5,
            content: "Kreativ",
            aboutColor: "green",
            group: 'green 1',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 6,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'green 1',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 7,
            content: "Lederskap",
            aboutColor: "green",
            group: 'green 1',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 8,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'green 1',
            greenAgree: 4,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 9,
            content: "Logisk",
            aboutColor: "blue",
            group: 'blue 1',
            blueAgree: 15,//['Terje', 'Per', 'Espen'],
            redAgree: 3,
            greenAgree: 19,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 10,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'blue 1',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 11,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'blue 1',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 12,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'blue 1',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 13,
            content: "Social",
            aboutColor: "red",
            group: 'green 1',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 14,
            content: "Forstående",
            aboutColor: "red",
            group: 'green 1',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 15,
            content: "Lyttende",
            aboutColor: "red",
            group: 'green 1',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 16,
            content: "Vennlig",
            aboutColor: "red",
            group: 'green 1',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 17,
            content: "Forstående",
            aboutColor: "green",
            group: 'blue 1',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 2,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 18,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'blue 1',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 19,
            content: "drømmende",
            aboutColor: "green",
            group: 'blue 1',
            blueAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 20,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'blue 1',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 21,
            content: "Målrettet",
            aboutColor: "blue",
            group: 'red 1',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 22,
            content: "Planerer",
            aboutColor: "blue",
            group: 'red 1',
            redAgree: 3,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 23,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'red 1',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 2, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 24,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'red 1',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 25,
            content: "Social",
            aboutColor: "red",
            group: 'blue 1',
            blueAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 26,
            content: "Idealist",
            aboutColor: "red",
            group: 'blue 1',
            blueAgree: 7,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 27,
            content: "Lyttende",
            aboutColor: "red",
            group: 'blue 1',
            blueAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 28,
            content: "Vennlig",
            aboutColor: "red",
            group: 'blue 1',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 29,
            content: "Kreativ",
            aboutColor: "green",
            group: 'red 1',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 30,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'red 1',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 2, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 31,
            content: "Lederskap",
            aboutColor: "green",
            group: 'red 1',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 1, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 32,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'red 1',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 33,
            content: "Målrettet",
            aboutColor: "blue",
            group: 'green 1',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 34,
            content: "Planerer",
            aboutColor: "blue",
            group: 'green 1',
            greenAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 35,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'green 1',
            greenAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 36,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'green 1',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 37,
            content: "Social",
            aboutColor: "red",
            group: 'red 2',
            redAgree: 3,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 38,
            content: "Forstående",
            aboutColor: "red",
            group: 'red 2',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 1,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 39,
            content: "Rådgiver",
            aboutColor: "red",
            group: 'red 2',
            redAgree: 1,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 40,
            content: "Lederskap",
            aboutColor: "red",
            group: 'red 2',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 41,
            content: "Kreativ",
            aboutColor: "green",
            group: 'green 2',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 42,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'green 2',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 2,
            blueAgree: 4,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 43,
            content: "Lederskap",
            aboutColor: "green",
            group: 'green 2',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 44,
            content: "Veifinner",
            aboutColor: "green",
            group: 'green 2',
            greenAgree: 4,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 45,
            content: "Logisk",
            aboutColor: "blue",
            group: 'blue 2',
            blueAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 46,
            content: "Lederskap",
            aboutColor: "blue",
            group: 'blue 2',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 47,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'blue 2',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 3, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 48,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'blue 2',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 49,
            content: "Social",
            aboutColor: "red",
            group: 'green 2',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 50,
            content: "Forstående",
            aboutColor: "red",
            group: 'green 2',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 5,
            blueAgree: 5,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 51,
            content: "Lyttende",
            aboutColor: "red",
            group: 'green 2',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 2, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 52,
            content: "Vennlig",
            aboutColor: "red",
            group: 'green 2',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 53,
            content: "Kreativ",
            aboutColor: "green",
            group: 'blue 2',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 54,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'blue 2',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 1,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 55,
            content: "drømmende",
            aboutColor: "green",
            group: 'blue 2',
            blueAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 56,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'blue 2',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 1, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 57,
            content: "Logisk",
            aboutColor: "blue",
            group: 'red 2',
            redAgree: 8,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 3, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 58,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'red 2',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 59,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'red 2',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 9,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 60,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'red 2',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 61,
            content: "Social",
            aboutColor: "red",
            group: 'blue 2',
            blueAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 62,
            content: "Forstående",
            aboutColor: "red",
            group: 'blue 2',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 1, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 63,
            content: "Lyttende",
            aboutColor: "red",
            group: 'blue 2',
            blueAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 64,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'blue 2',
            blueAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 65,
            content: "Kreativ",
            aboutColor: "green",
            group: 'red 2',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 66,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'red 2',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 67,
            content: "Lederskap",
            aboutColor: "green",
            group: 'red 2',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 68,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'red 2',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 69,
            content: "Logisk",
            aboutColor: "blue",
            group: 'green 2',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 1, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 70,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'green 2',
            greenAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 71,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'green 2',
            greenAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 72,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'green 2',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 73,
            content: "Social",
            aboutColor: "red",
            group: 'red 3',
            redAgree: 3,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 74,
            content: "Forstående",
            aboutColor: "red",
            group: 'red 3',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 150, //x
            posY: 250, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 75,
            content: "Lyttende",
            aboutColor: "red",
            group: 'red 3',
            redAgree: 1,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 100, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 76,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'red 3',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 77,
            content: "Kreativ",
            aboutColor: "green",
            group: 'green 3',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 2, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 78,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'green 3',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 79,
            content: "Lederskap",
            aboutColor: "green",
            group: 'green 3',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 80,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'green 3',
            greenAgree: 4,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 81,
            content: "Logisk",
            aboutColor: "blue",
            group: 'blue 3',
            blueAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 82,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'blue 3',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 83,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'blue 3',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 84,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'blue 3',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 85,
            content: "Social",
            aboutColor: "red",
            group: 'green 3',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 86,
            content: "Forstående",
            aboutColor: "red",
            group: 'green 3',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 1, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 87,
            content: "Lyttende",
            aboutColor: "red",
            group: 'green 3',
            greenAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 88,
            content: "Vennlig",
            aboutColor: "red",
            group: 'green 3',
            greenAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 89,
            content: "Kreativ",
            aboutColor: "green",
            group: 'blue 3',
            blueAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 90,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'blue 3',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 91,
            content: "Lederskap",
            aboutColor: "green",
            group: 'blue 3',
            blueAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 92,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'blue 3',
            blueAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 93,
            content: "Logisk",
            aboutColor: "blue",
            group: 'red 3',
            redAgree: 8,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 94,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'red 3',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 95,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'red 3',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 96,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'red 3',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 97,
            content: "Social",
            aboutColor: "red",
            group: 'blue 3',
            blueAgree: 6,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 98,
            content: "Forstående",
            aboutColor: "red",
            group: 'blue 3',
            blueAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 99,
            content: "Lyttende",
            aboutColor: "red",
            group: 'blue 3',
            blueAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 3, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 100,
            content: "Hjelpsom",
            aboutColor: "red",
            group: 'blue 3',
            blueAgree: 1,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            greenAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 101,
            content: "Kreativ",
            aboutColor: "green",
            group: 'red 3',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 102,
            content: "Inspirerende",
            aboutColor: "green",
            group: 'red 3',
            redAgree: 2,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 103,
            content: "Lederskap",
            aboutColor: "green",
            group: 'red 3',
            redAgree: 5,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 104,
            content: "Nytenkende",
            aboutColor: "green",
            group: 'red 3',
            redAgree: 4,//['Terje', 'Per', 'Espen'],
            greenAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        },
        {// how the model of the notes would look.
            ID: 105,
            content: "Logisk",
            aboutColor: "blue",
            group: 'green 3',
            greenAgree: 5,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {// how the model of the notes would look.
            ID: 106,
            content: "Tenkende",
            aboutColor: "blue",
            group: 'green 3',
            greenAgree: 8,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 500, //y
            zIndex: 2
        },
        {// how the model of the notes would look.
            ID: 107,
            content: "Systematisk",
            aboutColor: "blue",
            group: 'green 3',
            greenAgree: 2,//['Terje', 'Per', 'Espen'],
            redAgree: 0,
            blueAgree: 0,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 300, //y
            zIndex: 3
        },
        {// how the model of the notes would look.
            ID: 108,
            content: "Effektiv",
            aboutColor: "blue",
            group: 'green 3',
            greenAgree: 3,//['Terje', 'Per', 'Espen'],
            redAgree: 1,
            blueAgree: 1,
            disagree: 0, //['Knut'],
            posX: 200, //x
            posY: 500, //y
            zIndex: 4
        }
    ],
}