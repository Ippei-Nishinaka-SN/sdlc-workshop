import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4d20e38dfc0e4f08b6923a4210c5533a'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '7fe0c019aec04c99a1c1266c565d660c'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '7d7d59407ac2476db93fef6b05371f4b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '2df35bd0bfa14dcabfe7e991aa7804a2'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '899e6ae252e24a0bbce1dbd899fe7748'
                    }
                }
            }
        }
    }
}
