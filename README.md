# Céline Bouriez — Consultante en affaires réglementaires

## 👉 [Ouvrir le site](https://margauxbouriez-a11y.github.io/celineexpertev3/)

**Lien à partager :** https://margauxbouriez-a11y.github.io/celineexpertev3/

[![Déploiement](https://github.com/margauxbouriez-a11y/celineexpertev3/actions/workflows/deploy.yml/badge.svg)](https://github.com/margauxbouriez-a11y/celineexpertev3/actions/workflows/deploy.yml)

Site vitrine de Céline Bouriez, pharmacien experte en mise sur le marché des produits de santé,
pour proposer ses services de consultante à tout type d'entreprise : laboratoires
pharmaceutiques, biotechs, façonniers/CDMO, fabricants de dispositifs médicaux et de DIV,
établissements pharmaceutiques (intérim de pharmacien responsable).

Le site est **bilingue français / anglais** (bouton FR | EN en haut à droite ; la langue du
navigateur est choisie automatiquement).

---

## Contenu du site

| Section | Rôle |
|---|---|
| Accueil | Accroche « Votre AMM, sans faux pas. », badge « Disponible pour de nouvelles missions », bouton « Proposer une mission » |
| Références | Entreprises du parcours : Sanofi, Servier, ANSM, LFB, SERB… |
| Chiffres clés | 18+ ans, 9 entreprises/autorité, 3 familles de produits, 4 zones |
| Vous vous reconnaissez ? | 4 situations du client → la réponse apportée |
| Expertise | 6 services : stratégie, dossiers d'AMM, cycle de vie, biologiques, DM/DIV, pharmacien responsable |
| Pour qui | 5 types d'entreprises clientes |
| Missions | 4 formats : forfait, temps partagé, audit, intérim |
| Pourquoi moi | Atouts différenciants (industrie + ANSM, science + droit…) |
| Bandeau d'appel | « Un dossier en cours ou un dépôt à venir ? » |
| Méthode | Comprendre → Planifier → Livrer |
| Parcours | Expériences en industrie, internat, formation |
| Contact | E-mail pré-rempli, « copier l'adresse », « Premier échange sans engagement » |

Sur téléphone, un bouton « Proposer une mission » reste accessible en bas de l'écran pendant la lecture.

## Modifier un texte

Tous les textes sont dans **[`content.js`](content.js)**, rangés par section, en `fr` puis en `en`.
Modifier une phrase dans les deux langues, enregistrer (« Commit changes » sur GitHub) :
le site se met à jour tout seul en 1 à 2 minutes.

- Adresse e-mail : constante `EMAIL` en haut de `content.js`
- Photo : remplacer `public/celine-bouriez.png` (format carré)
- Mise en page : `pages/index.js` et `styles/home.module.css`

### À vérifier par Céline avant diffusion

- Les intitulés de poste chez **Genefit** et **Diagast** (non précisés à l'origine, indiqués « Affaires réglementaires »).
- La liste des services et des formats d'intervention (section Expertise / Missions) correspond bien à ce qu'elle souhaite proposer.
- La mention « Premier échange sans engagement » et le badge « Disponible pour de nouvelles missions » (à retirer dans `content.js` si ce n'est plus le cas).
- Ajouter si souhaité un lien LinkedIn ou un numéro de téléphone dans la section Contact.

## Technique

- Next.js en export statique, hébergé sur GitHub Pages.
- Chaque `push` sur `main` lance [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), qui construit et publie le site.
- En local : `npm ci` puis `npm run dev`, puis ouvrir http://localhost:3000/celineexpertev3
