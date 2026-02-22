import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type Booking = {
    id : Nat;
    fullName : Text;
    phoneNumber : Text;
    email : Text;
    service : Text;
    preferredDate : Text;
    preferredTime : Text;
  };

  module Booking {
    public func compareById(a : Booking, b : Booking) : Order.Order {
      Nat.compare(a.id, b.id);
    };
    public func compareByName(a : Booking, b : Booking) : Order.Order {
      Text.compare(a.fullName, b.fullName);
    };
  };

  let bookings = Map.empty<Nat, Booking>();
  var nextBookingId = 0;

  public shared ({ caller }) func submitBooking(fullName : Text, phoneNumber : Text, email : Text, service : Text, preferredDate : Text, preferredTime : Text) : async Nat {
    let bookingId = nextBookingId;
    let newBooking : Booking = {
      id = bookingId;
      fullName;
      phoneNumber;
      email;
      service;
      preferredDate;
      preferredTime;
    };
    bookings.add(bookingId, newBooking);
    nextBookingId += 1;
    bookingId;
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort(Booking.compareById);
  };
};
