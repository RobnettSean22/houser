module.exports = {
    readListings: (req, res, next) => {
        const db = req.app.get('db')
        db.read_listings().then((homes) => res.status(200).send(homes)).catch(err => {
            res.status(500).send({errorMessage:'blind'})
        }) 
    },

    readListing: (req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db')
        db.read_listing(id).then((homes) => res.status(200).send(homes)).catch(err => {
            res.status(500).send({errorMessage:'blind'})
        })
    },

    createListing: (req, res, next) => {
        const db =req.app.get('db')
        const {address, city, state, zip, image} = req.body
        db.create_listing([address, city, state, zip, image]).then((homes) => res.status(200).send(homes)).catch(err => {
            res.status(500).send({errorMessage:'did not create'})
        })
    },

    editListing: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {address, city, state, zip, image} = req.body
        db.edit_listing([id, address, city, state, zip, image]).then((homes) => res.status(200).send(homes)).catch( err => {
            res.status(500).send({errorMessage:'edit did not take'})
        })
    },

    deleteListing: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_listing(id).then((homes) => res.status(200).send(homes)).catch(err => {
            res.status(500).send({errorMessage:"did not delete"})
        })
    }

}