# Céline Bouriez — Consultante en affaires réglementaires

## 👉 [Ouvrir le site](https://margauxbouriez-a11y.github.io/celineexpertev3/)

**Lien à partager :** https://margauxbouriez-a11y.github.io/celineexpertev3/

[![Déploiement](https://github.com/margauxbouriez-a11y/celineexpertev3/actions/workflows/deploy.yml/badge.svg)](https://github.com/margauxbouriez-a11y/celineexpertev3/actions/workflows/deploy.yml)

Site vitrine de Céline Bouriez, pharmacien experte en mise sur le marché des produits de santé,
pour proposer ses services de consultante à tout type d'entreprise : laboratoires
pharmaceutiques, biotechs, façonniers/CDMO, fabricants de dispositifs médicaux et de DIV,
établissements pharmaceutiques (intérim de pharmacien responsable).

Le site est **en anglais**.

---

## Contenu du site

| Section | Rôle |
|---|---|
| Accueil | Accroche « From first product to market authorisation. », badge « Available for new assignments », bouton « Propose an assignment » |
| Références | Entreprises du parcours : Sanofi, Servier, ANSM, LFB, SERB… |
| Chiffres clés | 20+ ans, 9 entreprises et autorité compétente, 4 marchés couverts, procédures CTD |
| How I can support your company | Offre phare « Regulatory set-up for new products » (entreprises sans équipe réglementaire), puis 4 formats : forfait, fonction réglementaire externalisée, audit, intérim |
| Expertise | 6 domaines : stratégie, dossiers d'AMM, cycle de vie, biologiques et dérivés du plasma, DM (MDR) et DIV (IVDR), pharmacien responsable |
| Who I help | 5 types d'entreprises clientes, en commençant par les start-ups et biotechs |
| Why work with me | Atouts différenciants (industrie + ANSM, science + droit…) |
| Career | Parcours, marchés couverts (médicaments chimiques, biologiques et dérivés du plasma, DM, DIV), formation |
| Contact | E-mail pré-rempli, « copier l'adresse », « First conversation, no commitment » |

Sur téléphone, un bouton « Propose an assignment » reste accessible en bas de l'écran pendant la lecture.

## Modifier un texte

Tous les textes sont dans **[`content.js`](content.js)**, rangés par section.
Modifier une phrase, enregistrer (« Commit changes » sur GitHub) :
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
