import ConnectRoute from 'connect-route'
import { Meteor } from 'meteor/meteor'
import { Links } from '../imports/collections/Links'
import { WebApp } from 'meteor/webapp'

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({})
  })
})

const onRoute = (req, res, next) => {
  const link = Links.findOne({ token: req.params.token })

  if (link) {
    Links.update(link, { $inc: { clicks: 1 } })
    res.writeHead(307, { 'Location': link.url })
    res.end()
  } else {
    next()
  }
}

const middleware = ConnectRoute(router => {
  router.get('/:token', onRoute)
})

WebApp.connectHandlers.use(middleware)