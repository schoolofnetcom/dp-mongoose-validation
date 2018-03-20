import Person from './../schema/Person'

export default (req, res) => {
	Person
		.findByIdAndRemove(req.params.id)
		.then(() => res.status(204).end())
		.catch(err => res.status(500)
						 .json({ status: false, data: {} })
			)
}