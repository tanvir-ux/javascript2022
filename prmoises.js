function promises() {
    const successfulPromise = timeout(100).then(result => `success: ${result}`)

    const failingPromise = timeout(200, true).then(null, error =>
        Promise.reject(`failure: ${error}`),
        )
    
    const recoveredPromise = timeout(300, true).then(null, error => 
        Promise.resolve(`failed and recovered: ${error}`)
        )

    successfulPromise.then(log, logError)
    failingPromise.then(log, logError)
    recoveredPromise.then(log, logError)   
}

function asyncAwaits() {
    async function successfulAsyncAwait() {
        const result = await timeout(100)
        return `success: ${result}`
    }

    async function failedAsyncAwait() {
        const result = await timeout(200, true)
        return `failed: ${result}`
    }

    async function recoveredAsyncAwait() {
        let result
        try {
            result = await timeout(300, true)
            return `failed: ${result}`
        } catch (error) {
            return `failed and recovered: ${error}`
        }
    }

    successfulAsyncAwait().then(log, logError)
    failedAsyncAwait().then(log, logError)
    recoveredAsyncAwait().then(log, logError)
}

function log(...args) {
    console.log(...args)
}

function logError(...args) {
    console.log(...args)
}

function timeout(duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`rejected after ${duration}ms`)
            } else {
                resolve(`resolved after ${duration}ms`)
            }
        }, duration)
    })
}

// now write some react code in 2022

function GetGreetingForSubject({subject}) {
    const [isLoading, setIsloading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [greeting, setGreeting] = React.useState(null)

    React.useEffect(() => {
        async function fetchGreeting() {
            try {
                const response = await window.fetch('https://example.com/api/greeting')
                const data = await response.json()
                setGreeting(data.greeting)
            } catch(error) {
                setError(error)
            } finally {
                setIsloading(false)
            }
        }
        setIsloading(true)
        fetchGreeting()
    }, [])

    return isLoading ? (
        'loading...'
    ) : error ? (
        'ERROR!'
    ) : greeting ? (
        <div>
            {greeting} {subject}
        </div>
    ) : null
}