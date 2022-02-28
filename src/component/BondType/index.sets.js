export const BondTypes = [
    {
        index: 0,
        label: '全部',
        alias: '全部',
        flag: 1,
        value: []
        // value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    {
        index: 1,
        label: '包括：【0 国债】【1 政策性金融债】【6 央行票据】【11 地方政府债券】',
        alias: '利率',
        flag: 1,
        category: 1,
        value: [0, 1, 6, 11]
    },
    {
        index: 2,
        label: '非：【0 国债】【1 政策性金融债】【6 央行票据】【11 地方政府债券】',
        alias: '信用',
        flag: 1,
        category: 1,
        value: [2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    {
        index: 3,
        label: '【0 国债】',
        alias: '国债',
        value: 0
    },
    {
        index: 4,
        label: '【1 政策性金融债】',
        alias: '政策性',
        value: 1
    },
    {
        index: 5,
        label: '【6 央行票据】',
        alias: '央票',
        value: 6
    },
    {
        index: 6,
        label: '【2 短期融资券】',
        alias: '短融',
        value: 2
    },
    {
        index: 7,
        label: '【15 超短期融资券】',
        alias: '超短融',
        value: 15
    },
    {
        index: 8,
        label: '【10 中期票据】',
        alias: '中票',
        value: 10
    },
    {
        index: 9,
        label: '【5 企业债】',
        alias: '企业债',
        value: 5
    },
    {
        index: 10,
        label: '非：【0 国债】【1 政策性金融债】【6 央行票据】【2 短期融资券】【15 超短期融资券】【10 中期票据】【5 企业债】',
        alias: '其他',
        value: [3, 4, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    }
]