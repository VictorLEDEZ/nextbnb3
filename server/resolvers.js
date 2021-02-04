import { db } from 'mongodb';

const Query = {
  // annonce: (root, args) => db.annonces.get(args.id), we can extract the id from args
  annonce: (root, { id }) => db.annonces.get(id),
  annonces: () => db.annonces.list(),
};

const Annonce = {
  entrepote: (annonce) => db.utilisateurs.get(annonce.utilisateurId),
};

// to export the object and to be able to import it on the other file
module.exports = { Query, Annonce };
