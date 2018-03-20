import Person from './../schema/Person'

export default (req, res) => {
	Person
		.find({})
		.then((people) => {
			if (!people || !people.length) {
				return res.status(404)
						  .json({
							  status: false,
							  data: []
						  })
			}

			return res.status(200)
					  .json({
						  status: true,
						  data: bills
					  })
		})
		.catch(err => res.status(500)
					     .json({
							 status: false,
							 data: []
						 })
		)
}