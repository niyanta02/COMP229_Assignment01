exports.home = function(req, res, next) {
    res.render('index', { title: 'HOME' ,

    userName: req.user ? req.user.username : ''});
}

exports.projects = function(req, res, next) {
    res.render('index', { title: 'Projects' , userName: req.user ? req.user.username : ''});
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About', userName: req.user ? req.user.username : '' });
}

