PGDMP     	    )                {            citas    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    18183    citas    DATABASE     �   CREATE DATABASE citas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_United States.1252';
    DROP DATABASE citas;
                postgres    false            �            1259    18331    appointment    TABLE     �   CREATE TABLE public.appointment (
    id bigint NOT NULL,
    appointment_number character varying(255),
    date_time timestamp(6) without time zone,
    observation character varying(255),
    specialty character varying(255),
    user_id bigint
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            �            1259    18330    appointment_id_seq    SEQUENCE     {   CREATE SEQUENCE public.appointment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    215                       0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    214            �            1259    18340    users    TABLE       CREATE TABLE public.users (
    id bigint NOT NULL,
    age integer NOT NULL,
    email character varying(255),
    first_name character varying(255),
    image character varying(255),
    last_name character varying(255),
    password character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18339    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    217                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    216            j           2604    18334    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            k           2604    18343    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217                      0    18331    appointment 
   TABLE DATA           i   COPY public.appointment (id, appointment_number, date_time, observation, specialty, user_id) FROM stdin;
    public          postgres    false    215   �                 0    18340    users 
   TABLE DATA           W   COPY public.users (id, age, email, first_name, image, last_name, password) FROM stdin;
    public          postgres    false    217   �                  0    0    appointment_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.appointment_id_seq', 1, false);
          public          postgres    false    214                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 30, true);
          public          postgres    false    216            m           2606    18338    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            postgres    false    215            o           2606    18349 "   users uk_6dotkott2kjsp8vw4d0m25fb7 
   CONSTRAINT     ^   ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk_6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);
 L   ALTER TABLE ONLY public.users DROP CONSTRAINT uk_6dotkott2kjsp8vw4d0m25fb7;
       public            postgres    false    217            q           2606    18347    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            r           2606    18350 '   appointment fk7bo52i6usixwb7ira9l16y3bu    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT fk7bo52i6usixwb7ira9l16y3bu FOREIGN KEY (user_id) REFERENCES public.users(id);
 Q   ALTER TABLE ONLY public.appointment DROP CONSTRAINT fk7bo52i6usixwb7ira9l16y3bu;
       public          postgres    false    217    3185    215                  x������ � �         �  x��V�R�H=�~dN�Fް�$C�76�s)�RRY�ȵx��ɒ���b"|�#�\�{�2c2� �yu�H�.}�iI�`́�����oߌNuIm�Ѧ�Vr��q�h�V�AVzc���m�PF]��2�p��ZPA��κ&�%~��ב3-���`�rL�kǛ$�C0r��n��z�7"Ɩt�dwm��B|�iea�r�P���q�d�⇖<��2���,����u����&4�̸ �u��2.��x���\j{j�Iq��C%�i�_���9�.*	��_�R�<��-o�@�-�p�}f��H��2�R��hH�1Y;���*m�Wd�u�!/h�ז�sHC�	8+�8r|��M�.�KҋIV�sP&L/SN��`{_��k�qG0YֶI1IS�y{�e劷��hD�cR>�˄�F����Q���ZZsP����`�l�V�Q��1�v��cN�QB�h�	�p�;�Ԩ �QR� �gZ�� �e�\���^�W�~_��%��w'k*R/;
�@�6-0Q�Q��� $kr�g@���X����Ƅ2lYhG����wLP�a��5����k�j��E:���gwI�KLI���4Ɍ�S�op�X�#�R��X5m4�Oџ�+	�e��26Q�#�!��)�Kjm�n���u�.���E��A<2x��X[��������n=zx_�����~�t�gd�C}
s�ҬlQ0�?i���ݻÃ��?�Q<�W+/���ͦ��7�Z
G �<�pL��j��B���SI?�G��y�����-8��Z�Pɳ&�-͐�W�������%��Ȗ�Zd��"�L��W�f�6YKьyK��^~ o�<�s^�(�����{�=��bl
�)J*������e�(^r�.Btr���V6Y��h�L�IH��d��qC�T� l�;�k��U�槸㵡X��F��ݹ7ف���M�f�Y-���{��@�f�:��o<�]����H�t�sƹ=[&j�{\M�%�P��a(�j�4��(܃h�L���3�ՎLb�9
cpo�6����!��ΰ��h4��zg��|���{��ږ��	4tg~��
�Lb�����:�X>�R�2��������㮅f�q�����׊@Q;:]NS�~0Q�O����j2�� i��[t(��C��
�?�͓ڏ�������;�u���+�S�Jzl$�t��x��G���j|,^�����HFh�Ap7�(v[�nDO��ѝ�(��]������9���i�M�o��W㨋c}Ir��"6�ۘ�k�z��� ��iG"LzGE j��V�+��Fx��o�-n��֙Ip���u����*UXQ:#��7?����z@�x��`Q���u�O�<��%8�p����������aNw�¨���CԻ�I�yqp��x��*\�m���x���[;��8�o+��2p�M����1��Eѿ_��m     