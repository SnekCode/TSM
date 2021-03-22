import orderElements, { IElement } from "./orderElements"

test('should return ordered list of dependencies ', () => {

    const elements: IElement[] = [
        {a: ["b", "c"]},
        {b: ["c"]},
        {c: []}
    ]

    const expected = ["c", "b", "a"]
    const result = orderElements(elements)

    expect(result).toStrictEqual(expected)
})

test('should return ordered list of dependencies 2 ', () => {

    const elements: IElement[] = [
        {a: ["b", "c"]},
        {b: ["c"]},
        {c: ["d", "a", "e"]}
    ]

    const expected = ["b", "a", "c"]
    const result = orderElements(elements)

    expect(result).toStrictEqual(expected)
})
