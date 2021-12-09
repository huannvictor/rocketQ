const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password
    let roomId
    let isRoom = true

    while (isRoom) {
      // repetition structure to generate the room's id
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString())
      }

      // vefification if the id's are difernt
      const roomExistIds = await db.all(`SELECT id FROM rooms`)

      isRoom = roomExistIds.some(roomExistId => roomExistId === roomId)

      if (!isRoom) {
        // send room data to database
        await db.run(
          `INSERT INTO rooms (
              id,
              pass
            ) VALUES (
              ${parseInt(roomId)},
              ${pass}
            )`
        )
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}
