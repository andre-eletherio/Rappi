export const goToSignUpPage = (navigate) => {
    navigate("/signUp")
}

export const goToAddress = (navigate) => {
    navigate("/address")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToRestaurant = (navigate, id) => {
    navigate("/restaurant/" + id)
}

export const goToProduct = (navigate, id, name, description, price) => {
    navigate("/product/" + id +"/" + name + "/" + description + "/" + price)
}

export const goToCart = (navigate) => {
    navigate("/cart")
}

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToLogin  = (navigate) => {
    navigate("login")
}