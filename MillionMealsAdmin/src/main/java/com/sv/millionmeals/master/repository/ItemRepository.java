/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sv.millionmeals.master.repository;

import com.sv.millionmeals.master.model.MItem;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author kalum
 */
public interface ItemRepository extends JpaRepository<MItem, Integer>{

    public MItem findByName(String name);

   
    
}