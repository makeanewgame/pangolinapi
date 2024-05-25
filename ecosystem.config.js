module.exports = {
    apps: [
        {
            name: 'pangolinapi',
            cwd: '/home/ec2-user/pangolinapi',
            script: 'npm',
            args: 'run develop',
            env: {
                NODE_ENV: 'pangolin',
                HOST_PORT_SITE: 4343,
                DOMAIN_URL: 'pangolinapi.fovimarlo.com'
            }
        },
    ]
};
