import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  //Retourne id/nom des profiles (Administrateur, Organisateur, Visiteur)
  //Utile pour l'affichage dans l'inscription principalement
  getUserProfiles() {
    return this.http.get<any>(`userProfiles`);
  }

  //Post un utilisateur
  register(user: User) {
    return this.http.post<any>(`users`, user);
  }

  //On update un utilisateur
  updateUser(userId, user: User, formData) {
    //Si on a pas d'image on force qd même le formdata
    if(!formData){
      formData = new FormData();
      formData.append("user", JSON.stringify(user));
    }else{
      formData.append("user", JSON.stringify(user));
    }
    return this.http.put<any>(`users/${userId}`, formData);
  }

  //Récupére les infos d'un utilisateur en particulier
  getUserWithId(userId){
    return this.http.get<any>(`users/${userId}`);
  }

  //Récupére tous les utilisateurs avec leurs profiles
  getAllWithProfiles(){
    return this.http.get<any>(`usersWithProfiles`);
  }

  //Update un utilisateur depuis le panel admin
  updateUserFromAdmin(userId, user: User){
    return this.http.put<any>(`updateUserFromAdmin/${userId}`, user);
  }

  //Update un profile utilisateur (Organisateur, Visiteur..)
  updateUserProfile(userId, profileId){
    return this.http.put<any>(`updateUserProfile/${userId}`, {profileId: profileId});
  }

  //Supprime un utilisateur de la base de données
  removeUser(userId){
    return this.http.delete<any>(`users/${userId}`);
  }

  //Supprime un profil utilisateur de la base de données
  removeUserProfile(userId, profileId){
    return this.http.delete<any>(`deleteUserProfile/${userId}/${profileId}`);
  }

}
