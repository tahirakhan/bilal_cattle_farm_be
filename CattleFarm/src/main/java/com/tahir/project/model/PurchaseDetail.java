package com.tahir.project.model;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

/**
 * Created by Tahir on 1/12/2017.
 */
@Entity
@Table(name = "purchase_detail", catalog = "cattlefarm")
public class PurchaseDetail implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true, nullable = false)
    private Integer id;

    @Column(name = "PURCHASE_ID")
    private Purchase purchase;

    @Column(name = "QUANTITY")
    Integer quantity;

    @Column(name = "PRICE")
    BigDecimal price;

    @ManyToOne ( fetch=FetchType.EAGER ) //employ lazy loading, you can put that on @OneToMany too
    @JoinColumn( name="ANIMAL_ID", nullable=false )
    Animal animal;

    @ManyToOne ( fetch=FetchType.EAGER ) //employ lazy loading, you can put that on @OneToMany too
    @JoinColumn( name="PRODUCT_ID", nullable=false )
    Product product;

    @ManyToOne ( fetch=FetchType.EAGER ) //employ lazy loading, you can put that on @OneToMany too
    @JoinColumn( name="TYPE_ID", nullable=false )
    PurchaseType purchaseType;

    public PurchaseDetail(){

    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



}
