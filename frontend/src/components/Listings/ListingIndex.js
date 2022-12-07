import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import ListingIndexItem from './ListingIndexItem';
import { fetchListings, getListings } from '../../store/listings';
import './Listings.css'



const ListingIndex = () => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    const randomListings = listings.sort(() => Math.random() - 0.5)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    const listingItems = randomListings.map((listing) => {
        return <ListingIndexItem key={listing.id} listing={listing} />
    })

    return (
        <div className='listings-index'>
            <ul>
                {listingItems}
            </ul>
        </div>
    )
}


export default ListingIndex