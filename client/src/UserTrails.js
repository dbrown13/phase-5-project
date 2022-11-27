import TrailCard from "./TrailCard";

function UserTrails({ favoriteTrail, onFavoriteTrail, setFavoriteTrail }) {
    const favoriteTrails = favoriteTrail.map((trail) => {
        return (
            <TrailCard 
                key={trail.id}
                trail={trail}
                favoriteTrail={favoriteTrail}
                onFavoriteTrail={onFavoriteTrail}
            />
        )
    })
    return (
        <div>{favoriteTrails}</div>
    )
}

export default UserTrails;