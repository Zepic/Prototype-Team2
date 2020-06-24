//model
const model = {
    users: [
        {
            name: 'Mr. Green',
            color: 'green',
            copiedNotes: [],
        },
        {
            name: 'Mr. Red',
            color: 'green',
            copiedNotes: [],
        },
        {
            name: 'Mr. Blue',
            color: 'blue',
            copiedNotes: [],
        },
    ],
    activeView: 'startPage',
    activeUser: 'Mr. Blue',
    activeGroup: '',
    activeAboutColor: '',
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
