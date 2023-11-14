module.exports = {
    apps: [{
    name: '0sunservermanapplication',
    script: 'npx nest start',
    instances: 0,
    exec_mode: 'cluster'
    }]
  }