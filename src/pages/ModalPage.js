import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = [
    <Button className="mr-3" success onClick={handleClose}>
      I accept
    </Button>,
    <Button danger onClick={handleClose}>
      I decline
    </Button>,
  ];
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      I am a Modal
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis imperdiet dui, vel ultricies turpis bibendum eu. Vivamus nisi
        massa, sagittis nec eros eget, scelerisque luctus ex. Vivamus
        pellentesque magna ac metus dignissim pulvinar. Nullam sit amet congue
        ipsum. Proin mollis sagittis iaculis. Sed viverra ex sit amet urna
        volutpat aliquet. Nam eget nisi rhoncus, feugiat est at, porttitor sem.
        Cras id ipsum eget mauris rhoncus sodales. Nam placerat urna non elit
        sollicitudin imperdiet. Donec id condimentum leo. Mauris consectetur
        magna ac interdum tempus. Vivamus lacinia turpis ornare ullamcorper
        iaculis. Nulla eget ligula ullamcorper, iaculis augue posuere, feugiat
        enim. Integer a ex quis lacus tempus euismod. Nulla vestibulum
        ullamcorper quam, vel sodales arcu egestas in. Donec facilisis ultricies
        est, vitae viverra odio gravida a.
      </p>
    </div>
  );
}

export default ModalPage;
