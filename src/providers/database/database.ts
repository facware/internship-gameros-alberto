import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  //Variables
  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(public http: HttpClient, public storage: SQLite) {
    if(!this.isOpen){
      this.storage = new SQLite();
      this.storage.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        this.db=db;
        db.executeSql('create table if not exist user(idUser int primary autoincrement,Nombre varchar,Apellido varchar,Correo varchar unique,Contraseña varchar,Sexo varchar(1),FNacimiento date,Pais int, Esado int )', {});
        db.executeSql('create table if not exist docs(path varchar, name varchar)', {});
        this.isOpen=true;


      })
        .catch(e => console.log(e));
    }
  }

  registrarUsuario(u:string[8]){
    return new Promise ((resolve,reject)=>{
      let sql ="insert into user (Nombre,Apellido,Correo,Contraseña,Sexo,FNacimiento,Pais,Estado) values (?,?,?,?,?,?,?,?)";
      this.db.executeSql(sql,[u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7]])
      .then((data)=>{
        resolve(data);
      },(error)=>{
        reject(error);
      });
    });
  }

  //Metodo para obtener los datos para el inicio de sesion

  getUser(correo,pswd){
    return new Promise((resolve,reject)=>{
      this.db.executeSql("select correo, contraseña from user where correo like '"+correo+"'",[]).then((data)=>{
        let arrayUser = [];
        if (data.rows.length > 0) {
          arrayUser.push({
            correo:data.rows.item(0).correo,
            pass:data.rows.item(0).contraseña
          });
        }resolve(arrayUser);
      },(error)=>{
        reject(error);
      })
    })
  }

}
