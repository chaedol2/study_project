interface PostgresDB {
    runQuery: (sql: string) => any[]
}

interface Author {
    first: string
    last: string
}

interface DB {
    runQeury: (sql: string) => any[]
}

function getAuthors(database: DB): Author[] {
    const authorRows = database.runQeury(`SELECT FIRST, LAST FROM AUTHORS`)
    return authorRows.map(row => ({first: row[0], last: row[1]}))
}

test('getAuthors', () => {
    const authors = getAuthors({
        runQeury(sql: string) {
            return [
                ['Toni', 'Morrison'],
                ['Maya', 'Angelou'],
            ]
        },
    })
    expect(authors).toEqual([
        {first: 'Toni', last: 'Morrison'},
        {first: 'Maya', last: 'Angelou'},
    ])
})

export default {}