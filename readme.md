# Angbad

A micro library to help you put your code in your Services, not your Controllers.
---

  It is said that global, mutable state is the root of all evil. If that is so,
then Angbad is a place where we can contain the forces of evil.

  *\*Angbad was the fortress of Morgoth and his forces of darkness.*
---

  Basing our angular apps off of mutable models shared through dependency injection
poses a challenge.  When updating our models through network requests, etc.,
we have to be careful NOT TO DESTROY THE BACKING ARRAY OF A SERVICE.
If we create a new array, then we have to provide its reference
to any angular services that use it for the purposes of dirty checking, as well as
to any views/templates/ that use it for the purposes of rendering.

  The rub is that we want dirty checking to happen all of the times,
but we want rendering to happen only some of the times.
Typically, we take care of this in the controller -
i.e. THIS INJECTS MORE WORK TO DO INTO THE CONTROLLER (& maybe view)!
Ultimately, however, this is a concern of the model -
i.e. WE DON'T HAVE TO DO IT LIKE THIS.

Using the techniques this micro library employs, pretty much all we have to do
in our controllers is say something along the lines of:
```js
var vm = this;
vm.dataToBePaired = aService.dataToBePaired
```

---

 ### API will harden over the next few days.

 *Used in production, but i want to make sure the API is tweaked/polished before releasing it into the wild.*
