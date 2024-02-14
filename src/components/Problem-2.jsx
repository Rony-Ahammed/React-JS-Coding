import React, { useState, useEffect } from "react";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const [searchTermA, setSearchTermA] = useState("");
  const [searchTermB, setSearchTermB] = useState("");
  const [contactsA, setContactsA] = useState([]);
  const [contactsB, setContactsB] = useState([]);
  const [filteredContactsA, setFilteredContactsA] = useState([]);
  const [filteredContactsB, setFilteredContactsB] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch contacts from API for Modal A
    // Mock data for demonstration
    setContactsA([
      {
        id: 1,
        name: "John Doe",
        country: "USA",
        email: "john@example.com",
        phone: "1234567890",
      },
      {
        id: 2,
        name: "Jane Smith",
        country: "Canada",
        email: "jane@example.com",
        phone: "9876543210",
      },
      {
        id: 3,
        name: "Alice Johnson",
        country: "USA",
        email: "alice@example.com",
        phone: "4567890123",
      },
      {
        id: 4,
        name: "Bob Jones",
        country: "USA",
        email: "bob@example.com",
        phone: "3210987654",
      },
      {
        id: 5,
        name: "Emma Brown",
        country: "USA",
        email: "emma@example.com",
        phone: "7890123456",
      },
      {
        id: 6,
        name: "Michael White",
        country: "USA",
        email: "michael@example.com",
        phone: "2345678901",
      },
    ]);
  }, []);

  useEffect(() => {
    // Fetch contacts from API for Modal B
    // Mock data for demonstration
    setContactsB([
      {
        id: 1,
        name: "Bob Jones",
        country: "USA",
        email: "bob@example.com",
        phone: "3210987654",
      },
      {
        id: 2,
        name: "Emma Brown",
        country: "USA",
        email: "emma@example.com",
        phone: "7890123456",
      },
      {
        id: 3,
        name: "Michael White",
        country: "USA",
        email: "michael@example.com",
        phone: "2345678901",
      },
    ]);
  }, []);

  const handleAllContactsClick = () => {
    setShowModalA(true);
    setShowModalB(false);
    setShowModalC(false);
    window.history.pushState({}, null, "/all-contacts");
  };

  const handleUSContactsClick = () => {
    setShowModalA(false);
    setShowModalB(true);
    setShowModalC(false);
    window.history.pushState({}, null, "/us-contacts");
  };

  const handleModalAClose = () => {
    setShowModalA(false);
    window.history.back();
  };

  const handleModalBClose = () => {
    setShowModalB(false);
    window.history.back();
  };

  const handleModalCClose = () => {
    setShowModalC(false);
  };

  const handleCheckboxChange = (e) => {
    setOnlyEven(e.target.checked);
  };

  const handleSearchTermAChange = (e) => {
    setSearchTermA(e.target.value);
  };

  const handleSearchTermBChange = (e) => {
    setSearchTermB(e.target.value);
  };

  const handleContactItemClick = (contact) => {
    setSelectedContact(contact);
    setShowModalC(true);
  };

  useEffect(() => {
    // Filter contacts for Modal A
    const filteredA = contactsA.filter((contact) => {
      if (onlyEven && contact.id % 2 !== 0) {
        return false;
      }
      return contact.name.toLowerCase().includes(searchTermA.toLowerCase());
    });
    setFilteredContactsA(filteredA);
  }, [contactsA, onlyEven, searchTermA]);

  useEffect(() => {
    // Filter contacts for Modal B
    const filteredB = contactsB.filter((contact) => {
      if (onlyEven && contact.id % 2 !== 0) {
        return false;
      }
      return contact.name.toLowerCase().includes(searchTermB.toLowerCase());
    });
    setFilteredContactsB(filteredB);
  }, [contactsB, onlyEven, searchTermB]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleAllContactsClick}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleUSContactsClick}
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* Modals */}
      {showModalA && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModalA ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal A - All Contacts</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalAClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* Contacts list */}
                {filteredContactsA.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => handleContactItemClick(contact)}
                  >
                    {contact.name}
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAllContactsClick}
                  style={{ backgroundColor: "#46139f" }}
                >
                  All Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleUSContactsClick}
                  style={{ backgroundColor: "#ff7f50" }}
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalAClose}
                  style={{ backgroundColor: "#46139f" }}
                >
                  Close
                </button>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleCheckboxChange}
                    checked={onlyEven}
                  />{" "}
                  Only even
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModalB && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModalB ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal B - US Contacts</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalBClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* Contacts list */}
                {filteredContactsB.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => handleContactItemClick(contact)}
                  >
                    {contact.name}
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAllContactsClick}
                  style={{ backgroundColor: "#46139f" }}
                >
                  All Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleUSContactsClick}
                  style={{ backgroundColor: "#ff7f50" }}
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalBClose}
                  style={{ backgroundColor: "#46139f" }}
                >
                  Close
                </button>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleCheckboxChange}
                    checked={onlyEven}
                  />{" "}
                  Only even
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModalC && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModalC ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal C - Contact Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalCClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* Contact details */}
                {selectedContact && (
                  <div>
                    <p>Name: {selectedContact.name}</p>
                    <p>Country: {selectedContact.country}</p>
                    <p>Email: {selectedContact.email}</p>
                    <p>Phone: {selectedContact.phone}</p>
                    {/* Add more contact details here */}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalCClose}
                  style={{ backgroundColor: "#46139f", borderColor: "#46139f" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem2;
