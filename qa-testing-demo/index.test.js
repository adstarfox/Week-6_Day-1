 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  describe('tests for Format Tile Function', () => {
    let {title} = testData
    test('Does format title return a string?', () => {
      expect(typeof formatTitle(title)).toBe('string')
    })

    test('Does format title format the title?', () => {
      expect(formatTitle(title)).toEqual('Nulla Ac')
    })

  })

  describe('Tests for shorten Bio Fuction', () => {
    let {bio} = testData

    test('Does shortenBio return"About the Speaker"', () => {
      expect(shortenBio(bio)).toContain('About the Speaker')
    })
  })

  describe('To be or not to be', () => {
    let {length} = testData
    let timeArr = convertLength(length)

    test(`To be`, () => {
      expect(timeArr).toBe([1,5])
    })

    test(`To equal`, () => {
      expect(timeArr).toEqual([1,5])
    })

    test('To have length', () => {
      expect(timeArr).toHaveLength(2)
    })
  })