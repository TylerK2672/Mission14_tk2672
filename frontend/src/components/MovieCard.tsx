import { Movie } from '../types/Movie';

export default function MovieCard(props: Movie) {
  return (
    <div>
        <span>
          {props.title}
        </span>
      <ul>
        <li>
          <span>
            {props.director}, {props.year}
          </span>
        </li>
        <li>
          <span>
            {props.category}
          </span>
        </li>
        <li>
          <span>
            Edited: {props.edited}
          </span>
        </li>

        <li>
          <span>
            Lent to: {props.lentTo}
          </span>
        </li>

        <li>
          <span>
            Notes: {props.notes}
          </span>
        </li>
        <li>
          <span>
            Rating: {props.rating}
          </span>
        </li>
      </ul>
      <button type="button">
        Checkout
      </button>
    </div>
  );
}
