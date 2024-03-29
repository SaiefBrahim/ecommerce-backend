var express = require("express");
var router = express.Router();
var ticketsCtrl = require("../controllers/tickets");
router.get("/", ticketsCtrl.getAllTickets);
router.get("/:id", ticketsCtrl.getTicket);
router.get("/:email", ticketsCtrl.getOwnAllTickets);
router.get("/:email/:id", ticketsCtrl.getOwnTicket);
router.post("/", ticketsCtrl.addTicket);
router.put("/:id", ticketsCtrl.updateTicket);
router.put("/:email/:id", ticketsCtrl.updateOwnTicket);
router.delete("/:id", ticketsCtrl.deleteTicket);

module.exports = router;
