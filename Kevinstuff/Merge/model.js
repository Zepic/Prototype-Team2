//model
const model = {
    user: [
        {
        name: 'terje',
        color: 'green',
        copiedWords: [6,5,4,10,69],
        personalNotes:[
            'bob', 'karl','hei',
        ],
    },
        {
        name: 'geir',
        color: 'green',
        copiedWords: [
            7,13,11,73
        ],
        personalNotes:[
            {
                content: 'bob'
            },
            {
                content: 'hei'
            },
            {
                content: 'ree'
            },
        ],
    },
    ],
    // 
    activeView: 'startPage',
    activeUser: 'geir',
    activeGroup: 'blue 1',
    activeAboutColor: 'blue',
    groups: [
        {
            name: 'red 1',
            color: 'red',
        },
        {
            name: 'green 1',
            color: 'green',
        },
        {
            name: 'blue 1',
            color: 'blue',
        },
        {
            name: 'red 2',
            color: 'red',
        },
        {
            name: 'green 2',
            color: 'green',
        },
        {
            name: 'blue 2',
            color: 'blue',
        },
        {
            name: 'red 3',
            color: 'red',
        },
        {
            name: 'green 3',
            color: 'green',
        },
        {
            name: 'blue 3',
            color: 'blue',
        },
    ],
    updates: [], //insert fake news
};
