import React from 'react';
import pet, { Photo } from '@frontendmasters/pet';
import { navigate, RouteComponentProps } from '@reach/router';
import Carousel from '../components/Carousel';
import ErrorBoundary from '../ErrorBoundry';
import ThemeContext from '../ThemeContext';
import Modal from '../components/Modal';

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  state = {
    loading: true,
    showModal: false,
    name: '',
    animal: '',
    location: '',
    description: '',
    media: [] as Photo[],
    url: '',
    breed: '',
  };

  componentDidMount() {
    if (!this.props.id) {
      navigate('/');
      return;
    }

    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err: Error) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <p>loading...</p>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>
                  Yes{' '}
                  <span role="img" aria-label="Smiley face emoji">
                    😬
                  </span>
                </button>
                <button onClick={this.toggleModal}>
                  No{' '}
                  <span role="img" aria-label="Sad face emoji">
                    😢
                  </span>
                </button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundry(
  props: RouteComponentProps<{ id: string }>,
): JSX.Element {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
