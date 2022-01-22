const streetName = user && user.address && user.address.street.streetName
// new way
const streetName = user?.address?.stree?.name 
const onSuccess = options?.onSuccess

onSuccess?.({data: 'yay'})

options?.onSuccess?.({data: 'yay'})

options?.onSuccess({data: 'yay'})