const dataMenu = [
    {
        nome: "cafe",
        descricao: "Café",
        is_extra: false,
        parent_extra: null,
        valor: 3.00
    },
    {
        nome: "chantily",
        descricao: "Chantily (extra do Café)",
        is_extra: true,
        parent_extra: "cafe",
        valor: 1.50
    },
    {
        nome: "suco",
        descricao: "Suco Natural",
        is_extra: false,
        parent_extra: null,
        valor: 6.20
    },
    {
        nome: "sanduiche",
        descricao: "Sanduíche",
        is_extra: false,
        parent_extra: null,
        valor: 6.50
    },
    {
        nome: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        is_extra: true,
        parent_extra: "sanduiche",
        valor: 2.00
    },
    {
        nome: "salgado",
        descricao: "Salgado",
        is_extra: false,
        parent_extra: null,
        valor: 7.25
    },
    {
        nome: "combo1",
        descricao: "1 Suco e 1 Sanduíche",
        is_extra: false,
        parent_extra: null,
        valor: 9.50
    },
    {
        nome: "combo2",
        descricao: "1 Café e 1 Sanduíche",
        is_extra: false,
        parent_extra: null,
        valor: 7.50
    }
]

export default dataMenu