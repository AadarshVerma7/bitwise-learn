# caddy configuration for compiler
compiler.bitwiselearn.com {
	reverse_proxy http://127.0.0.1:2000
}

#caddy configuration for bitwise-learn frontend staging 
staging.bitwiselearn.com {
    reverse_proxy http://127.0.0.1:3000
}

#caddy configuration for bitwise-learn backend staging 
staging.backend.bitwiselearn.com {
    reverse_proxy http://127.0.0.1:8000
}
