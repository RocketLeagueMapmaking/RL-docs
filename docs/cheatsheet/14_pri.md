---
title: PRI
---

# PRI

## UEE

In UEExplorer open the package `TAGame.upk`. Click on `Objects` > `Classes` and go to `PRI_TA`.

Most classes have a list of variables, each one formatted as:

```c
// var <flags> <type> <name>
var transient int MatchScore;
```

When the type is class, you can search for that class and view those properties.

### Outer Classes

When a class `extend`s another class, it also inherits those properties. You can search for this outer class to view the properties from that class:

<!-- Image of search -->

When a class is another package, the search value will change to `<Package>.<Outer>`. Load that package and try again.

## Common properties

<!-- More? -->
- played id: `PRI.PlayerID`
- player name: `PRI.PlayerName`
- player team name: `PRI.Team.TeamName`
- player boost amount: `PRI.Car.BoostComponent.CurrentBoostAmount`

## Discord

If you want to access `PRI.Something.Bla.Bla.Bla.Bla` you could create 5 `Get Property`, 5 objects and connect them all or use the `/guide kismet` Discord command as a shortcut.
