import "./item.css";

export default function Item(props) {
  return (
    <div class="card">
      <img src={props.imgurl} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.desc}
        </p>
        <a href="#" class="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
